const SingleCoin = ({ singleCoin }) => {
  return <div>Coin found</div>;
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
