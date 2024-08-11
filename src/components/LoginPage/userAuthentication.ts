import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

export const loginAuth = (email: string, password: string): string | null => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
  return null;
};

export const signupAuth = (
  userName: string,
  email: string,
  password: string
): string | null => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential): string | null => {
      const user = userCredential.user;

      updateProfile(user, {
        displayName: userName,
      })
        .then(() => {
          //   profile updated
        })
        .catch((error) => {
          return error.message;
        });
      return null;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
  return null;
};
