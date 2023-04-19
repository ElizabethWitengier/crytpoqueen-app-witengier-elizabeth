import { useUserContext } from "@/context/UserContext";
import React from "react";

const SingleCoinCard = ({ id, image, title, symbol, price, description }) => {
  const { user } = useUserContext();
  const isLiked = user?.favorites.find((favorite) => favorite.id === id);
  return (
    <div className="flex rounded-lg shadow-lg items-start justify-center w-1/2 mx-auto h-auto mt-48">
      <img
        src={image}
        alt=" random imgee"
        class="w-full h-1/2 object-cover object-center"
      />

      <div class="relative px-4 -mt-16  ">
        {user && (
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isLiked ? "red" : "none"}
            stroke={isLiked ? "none" : "red"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="heart-icon"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 14.58 2 12.18 2 8.5 2 5.42 4.42 3 7.5 3c1.93 0 3.68.93 4.5 2.36C13.82 3.93 15.57 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.68-3.4 6.08-8.55 11.53L12 21.35z" />
          </svg>
        )}

        <div class="bg-white p-6">
          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
            {title}
          </h4>

          <h5 class="mt-1">
            ${price.toLocaleString() + ", " + symbol.toUpperCase()}
          </h5>
          <div class="mt-4">
            <span
              class="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoinCard;
