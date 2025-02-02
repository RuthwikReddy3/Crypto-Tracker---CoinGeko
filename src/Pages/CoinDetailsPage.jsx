import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchCoindetails } from "../Services/FetchCoindetails";
import currencyStore from "../Zustandstate/Store";
function Coindetailspage() {
  const { coinId } = useParams();
  const { currency } = currencyStore();
  
  const { data: coin, isLoading, isError, error } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => FetchCoindetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
        <img 
          src={coin?.image?.large}
          alt={coin?.name}
          className="mb-5 h-52"
        />
        
        <h1 className="mb-5 text-4xl font-bold">
          {coin?.name}
        </h1>

        {/* Render the description safely using dangerouslySetInnerHTML */}
        <div
          className="w-full px-6 py-4 text-justify"
          dangerouslySetInnerHTML={{ __html: coin?.description?.en || "" }}
        />

        {/* Rank section below the description */}
        <div className="flex items-center mt-4">
          <h2 className="text-xl font-bold">Rank</h2>
          <span className="ml-3 text-xl text-blue-500">
            {coin?.market_cap_rank}
          </span>
        </div>

        <div className="flex items-center mt-4">
           <h2 className="text-xl font-bold">Current Price</h2>
           <span className="ml-3 text-xl text-yellow-500">
            {coin?.market_data.current_price[currency]}
           </span>
        </div>

      </div>
      <div className="w-full p-6 md:w-2/3 ">
          Coin Information
      </div>
    </div>
  );
}

export default Coindetailspage;
