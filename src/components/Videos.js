import React from "react";

const Videos = () => {
  return (
    <div class="container mx-auto mt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            5 Things to Know If You Are New to Cryptocurrency{" "}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            If you're new to cryptocurrency, it's important to start small and
            only use money you can afford to lose. Cryptocurrency offers many
            advantages but is still volatile and risky for inexperienced
            investors. Be prepared for volatility, and consider venturing into
            other altcoins besides Bitcoin. It's also crucial to have a strategy
            for crypto trading, manage risk, diversify your portfolio, be in it
            for the long term, and automate purchases. Avoid common
            cryptocurrency mistakes such as buying just because the price is low
            and going "all-in." Finally, stay vigilant, keep an eye on reputable
            news sources, and avoid being swayed by hype or quick money
            promises.
          </p>
        </div>
        <div class="aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/21-SQN5ZfM0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pros and Cons of Cryptocurrency: A Beginner's Guide
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Cryptocurrency offers several benefits, including diversification
            from traditional financial assets, fast transaction speeds, low
            transaction costs, and direct investment control. Additionally,
            cryptocurrencies provide accessibility for the unbanked, high levels
            of security through the blockchain system, user privacy, and
            transparency with all transactions recorded on the blockchain
            ledger. However, it's important to note that cryptocurrencies also
            come with risks, such as the potential to lose funds if private keys
            are lost or stolen. It's recommended to start small and only use
            money that can afford to lose, as the market is volatile and risky
            for inexperienced investors. Diversifying one's portfolio, having a
            strategy for trading, and staying vigilant against common mistakes
            and hype are also essential factors to consider.
          </p>
        </div>
        <div class="aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/Ab3cr-hJ3Ko"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
