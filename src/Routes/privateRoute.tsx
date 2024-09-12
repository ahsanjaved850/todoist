import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "@/utils/firebase";
import { LoadingPage } from "@/components/LoadingState";

type PrivateRouteProps = {
  element: React.ReactElement;
  redirectPath?: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  redirectPath = "/today",
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    if (location.pathname !== "/") {
      return <Navigate to="/" state={{ from: location }} />;
    }
  } else {
    if (location.pathname === "/") {
      return <Navigate to={redirectPath} />;
    }
  }

  return element;
};
