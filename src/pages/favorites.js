import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { useUserContext } from "@/context/UserContext";
import Link from "next/link";

const Favorites = () => {
  const { user, setUser } = useUserContext();
  const favCoin = user?.favorites;

  const removeFav = async (id) => {
    await fetch(`/api/favorites/${user._id}/${id}`, { method: "DELETE" });
    await setUser({
      ...user,
      favorites: [...user?.favorites.filter((fav) => fav.id !== id)],
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchBar
        searchbar={false}
        text={
          "Keep an eye on the ever-evolving market trends and try to identify patterns. "
        }
      />
      <div className="md:mx-12 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
        {favCoin?.map((item) => (
          <div class="w-full max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={"/coin/" + item.id}>
              <img
                class="p-8 w-full object-cover"
                src={item.image.large}
                alt="product image"
              />
            </Link>
            <div class="px-5 pb-5">
              <Link href={"/coin/" + item.id}>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.name + ", " + item.symbol.toUpperCase()}
                </h5>
              </Link>
              {/* <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: item.description.en }}
            ></div> */}
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.market_data.current_price.usd.toLocaleString()}
                </span>
                <svg
                  onClick={() => removeFav(item.id)}
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={"green"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="heart-icon"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 14.58 2 12.18 2 8.5 2 5.42 4.42 3 7.5 3c1.93 0 3.68.93 4.5 2.36C13.82 3.93 15.57 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.68-3.4 6.08-8.55 11.53L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
