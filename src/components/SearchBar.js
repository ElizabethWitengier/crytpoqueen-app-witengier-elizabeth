import React from "react";

const SearchBar = ({
  value,
  handleChange,
  handleSubmit,
  searchbar = true,
  text,
}) => {
  return (
    <div className="flex flex-col gap-24 md:gap-0 md:flex-row justify-center mb-20 items-center w-full pt-48">
      <h3 className="text-right text-2xl font-extrabold md:flex-[1_0_22%] border-r-4 mr-4 pr-4 border-blue text-gold">
        CRYPTO
        <br />
        QUEEN
        <br />
        TIP
      </h3>
      <p className="text-center md:text-left md:flex-[1_0_33%]">{text}</p>

      {searchbar ? (
        <form
          className="w-full mr-8 ml-8 md:flex-[1_0_35%]"
          onSubmit={handleSubmit}
        >
          <label
            for="default-search"
            class="mb-2 text-sm font-medium font-bold text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={handleChange}
              value={value}
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search crypto coins"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue dark:hover:bg-green dark:focus:ring-green"
            >
              SEARCH
            </button>
          </div>
        </form>
      ) : (
        <div className="md:flex-[1_0_35%]"></div>
      )}
    </div>
  );
};

export default SearchBar;
