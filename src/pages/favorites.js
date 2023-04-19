import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";

const Favorites = () => {
  const { user } = useUserContext();
  const favCoin = user?.favorites;
  return (
    <div>
      <Navbar />
      <div className="mt-32">
        {favCoin?.map((item) => (
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="p-8 rounded-t-lg"
                src={item.image.large}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.name + ", " + item.symbol.toUpperCase()}
                </h5>
              </a>
              {/* <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: item.description.en }}
            ></div> */}
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.market_data.current_price.usd.toLocaleString()}
                </span>
                <a
                  href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Remove from favorites
                </a>
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
