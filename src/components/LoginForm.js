import { useUserContext } from "@/context/UserContext";
import Link from "next/link";
import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [reqMessage, setreqMessage] = useState(null);

  const { setUser } = useUserContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const user = await res.json();
      if (user.message) {
        setreqMessage(user.message);
      } else {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setreqMessage("Great job, Queen! You have logged in successfully.");
      }
    } catch (error) {
      console.error(error.message);
      setreqMessage("Darn! Invalid email or password");
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900 pt-24">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              SIGN IN TO YOUR ACCOUNT
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  id="email"
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <a class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  You must sign in to use the favorites feature. It's totally
                  worth it, Queen!
                </a>
              </div>
              <div>{reqMessage && reqMessage}</div>{" "}
              <button
                type="submit"
                class="text-white bg-gold hover:bg-gold focus:ring-4 focus:outline-none focus:ring-gold-300 font-2xl font-extrabold rounded-lg text-sm w-full px-8 py-2 text-center mr-3 md:mr-0 dark:bg-gold dark:hover:bg-gold dark:focus:ring-gold"
              >
                LOGIN
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  class="font-medium text-primary-600 text-green hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
