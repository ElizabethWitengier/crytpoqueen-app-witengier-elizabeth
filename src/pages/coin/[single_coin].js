import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SingleCoinCard from "@/components/SingleCoinCard";

const SingleCoin = ({ singleCoin }) => {
  return (
    <div>
      <Navbar />
      <SearchBar
        searchbar={false}
        text={
          "Take note of any trends or patterns that you notice, and use this information to inform your investment strategy. "
        }
      />
      <SingleCoinCard
        coin={singleCoin}
        id={singleCoin.id}
        image={singleCoin.image.large}
        title={singleCoin.name}
        symbol={singleCoin.symbol}
        description={singleCoin.description.en}
        price={singleCoin.market_data.current_price.usd}
      />
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { single_coin } = params;
  const res = await fetch(process.env.BASE_URL + "/api/coin/" + single_coin);
  const singleCoin = await res.json();
  if (singleCoin.error) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      singleCoin,
    },
  };
}

export default SingleCoin;
