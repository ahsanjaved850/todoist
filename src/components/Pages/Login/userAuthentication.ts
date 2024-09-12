import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/firebase";

export const loginAuth = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return null;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return errorMessage;
  }
};

export const signupAuth = async (
  userName: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: userName });
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
