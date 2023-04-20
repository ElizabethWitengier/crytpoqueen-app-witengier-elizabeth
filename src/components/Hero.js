import React from "react";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-gray-900 pt-48">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Ready to get started with cryptocurrency?
          </h1>

          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Crypto Queen is a platform designed to help women learn about and
            invest in cryptocurrency. Our mission is to empower women to take
            control of their finances and participate in the exciting crypto
            world.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Join our community and connect with other women learning and
            investing in crypto. Together, we can empower each other to achieve
            financial independence and security.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/woman.svg" className="object-contain" alt="Woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
