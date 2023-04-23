import { useUserContext } from "@/context/UserContext";
import React from "react";

const SingleCoinCard = ({
  id,
  image,
  title,
  symbol,
  price,
  description,
  coin,
}) => {
  const { user, setUser } = useUserContext();
  let isLiked = user?.favorites?.find((favorite) => favorite.id === id);

  const handleFav = async () => {
    if (isLiked) {
      await fetch(`/api/favorites/${user._id}/${id}`, { method: "DELETE" });
      await setUser({
        ...user,
        favorites: [...user?.favorites.filter((fav) => fav.id !== id)],
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          favorites: [...user?.favorities.filter((fav) => fav.id !== id)],
        })
      );
      isLiked = false;
    } else {
      await fetch(`/api/favorites/${user._id}/${id}`, { method: "POST" });
      await setUser({ ...user, favorites: [...user?.favorites, coin] });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, favorites: [...user?.favorites, coin] })
      );
      isLiked = true;
    }
  };
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg items-start justify-center md:w-1/2 mx-auto h-auto pt-24 mb-8">
      <img
        src={image}
        alt="coin image"
        class="w-full lg:max-w-sm h-1/2 object-cover object-center"
      />

      <div class="relative px-4">
        <div class="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 class="mt-1 text-2xl font-extrabold uppercase leading-tight truncate">
                {title}
              </h4>

              <h5 class="mt-1">
                ${price.toLocaleString() + " " + symbol.toUpperCase()}
              </h5>
            </div>
            {user && (
              <svg
                onClick={handleFav}
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isLiked ? "green" : "none"}
                stroke={isLiked ? "none" : "green"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="heart-icon"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 14.58 2 12.18 2 8.5 2 5.42 4.42 3 7.5 3c1.93 0 3.68.93 4.5 2.36C13.82 3.93 15.57 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.68-3.4 6.08-8.55 11.53L12 21.35z" />
              </svg>
            )}
          </div>
          <div class="mt-4">
            {description === "" || description === "\r\n" ? (
              "No description found"
            ) : (
              <span
                class="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: description }}
              ></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoinCard;
