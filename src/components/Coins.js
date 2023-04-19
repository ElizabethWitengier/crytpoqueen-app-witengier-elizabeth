import Link from "next/link";

const Coins = ({ coins }) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Market Rank
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Symbol
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              MarketCap
            </th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr
              key={coin.id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="px-6 py-4 text-center">{coin.market_cap_rank}</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Link
                  className="flex gap-4 items-center"
                  href={"/coin/" + coin.id}
                >
                  <img
                    src={coin.image}
                    width={30}
                    height={30}
                    alt={coin.name}
                  />
                  {coin.name}
                </Link>
              </th>
              <td class="px-6 py-4">{coin.symbol.toUpperCase()}</td>
              <td class="px-6 py-4">${coin.current_price.toLocaleString()}</td>
              <td class="px-6 py-4">${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
