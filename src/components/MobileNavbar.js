import { useUserContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  const router = useRouter();
  const { user } = useUserContext();
  const activeClass =
    "block py-2 pl-3 pr-4 text-white text-lg font-semibold bg-gold rounded md:bg-transparent md:text-gold md:p-0 md:dark:text-gold";
  const unActiveClass =
    "block py-2 pl-3 pr-4 text-blue text-lg font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent";

  const homeClass = router.pathname === "/" ? activeClass : unActiveClass,
    searchClass = router.pathname === "/search" ? activeClass : unActiveClass,
    learnClass = router.pathname === "/learn" ? activeClass : unActiveClass,
    favoritesClass =
      router.pathname === "/favorites" ? activeClass : unActiveClass;

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white z-50 md:hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="p-4">
        <Link
          href="/"
          onClick={toggleMenu}
          className="block py-2 text-blue font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent"
        >
          HOME
        </Link>
        <a
          href="/learn"
          onClick={toggleMenu}
          className="block py-2 text-blue font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent"
        >
          LEARN
        </a>
        <Link
          href="/search"
          onClick={toggleMenu}
          className="block py-2 text-blue font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent"
        >
          SEARCH
        </Link>
        {user && (
          <Link
            href="/favorites"
            onClick={toggleMenu}
            className="block py-2 text-blue font-semibold rounded hover:bg-text-gold md:hover:bg-transparent md:hover:text-gold md:p-0 md:dark:hover:text-gold dark:text-blue dark:hover:bg-transparent dark:hover:text-gold md:dark:hover:bg-transparent"
          >
            FAVORITES
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
