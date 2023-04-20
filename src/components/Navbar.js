import { useUserContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { user, setUser } = useUserContext();
  const activeClass =
    "block py-2 pl-3 pr-4 text-white text-lg font-semibold bg-gold rounded md:bg-transparent md:text-gold md:p-0 md:dark:text-gold";
  const unActiveClass =
    "block py-2 pl-3 pr-4 text-blue text-lg font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent";

  const homeClass = router.pathname === "/" ? activeClass : unActiveClass,
    searchClass = router.pathname === "/search" ? activeClass : unActiveClass,
    learnClass = router.pathname === "/learn" ? activeClass : unActiveClass,
    favoritesClass =
      router.pathname === "/favorites" ? activeClass : unActiveClass;

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center">
          <img
            src="/logo.svg"
            class="h-8 md:h-24 mr-3"
            alt="CryptoQueen Logo"
          />
        </Link>
        <div class="flex md:order-2">
          {user ? (
            <button
              onClick={logout}
              type="button"
              class="text-white bg-blue hover:bg-gold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2 text-center mr-3 md:mr-0 dark:bg-blue dark:hover:bg-gold dark:focus:ring-gold"
            >
              LOGOUT
            </button>
          ) : (
            <Link href={"/login"}>
              <button
                type="button"
                class="text-white bg-blue hover:bg-gold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12
                 py-2 text-center mr-3 md:mr-0 dark:bg-gold dark:hover:bg-gold dark:focus:ring-gold"
              >
                LOGIN
              </button>
            </Link>
          )}
          <MobileNavbar
            isOpen={isMobileMenuOpen}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" class={homeClass}>
                HOME
              </Link>
            </li>
            <li>
              <a href="/learn" class={learnClass}>
                LEARN
              </a>
            </li>
            <li>
              <Link href="/search" class={searchClass}>
                SEARCH
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/favorites" class={favoritesClass}>
                  FAVORITES
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
