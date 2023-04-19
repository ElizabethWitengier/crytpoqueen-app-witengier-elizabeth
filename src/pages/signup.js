import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignUp = () => {
  const { user } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
