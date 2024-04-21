
import { signIn } from "next-auth/react";

export type dataSignInUser = {
  phoneNumber: string;
  password: string;
};


export const SignInUserr = async (userDetails: dataSignInUser) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        phoneNumber: userDetails.phoneNumber,
        password: userDetails.password,
      });
      return res;
    } catch (error) {
      console.log("failed to signinUser", error);
    }
  };


  export const SignInUser = async (userDetails: dataSignInUser) => {
    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phoneNumber: userDetails.phoneNumber,
            password: userDetails.password,
        }),
      });
      return res;
    } catch (error) {
      console.log("failed to register", error);
    }
  };