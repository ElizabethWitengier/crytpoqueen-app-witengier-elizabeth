import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Login = () => {
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
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
