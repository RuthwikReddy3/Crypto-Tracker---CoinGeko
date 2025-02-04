import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Fetchcoindata } from "../../Services/Fetchcoindata";
import currencyStore from "../../Zustandstate/Store";
import { useNavigate } from "react-router-dom";

function CoinTable() {
  const [page, setPage] = useState(1);
  const { currency } = currencyStore(); 
  const navigate = useNavigate();

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => Fetchcoindata(page, currency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  function HandleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
        <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
          {/* Header of the table */}
          <div className="basis-[35%]">coin</div>
          <div className="basis-[25%]">Price</div>
          <div className="basis-[20%]">24hr Change(%)</div>
          <div className="basis-[20%]">Market Cap</div>
        </div>

        <div className="flex flex-col w-[80vw] mx-auto">
          {isLoading && (
            <div className="flex items-center justify-center w-full h-full">
              <div className="loading loading-spinner loading-lg"></div>
            </div>
          )}
          
          {/* Render coins if data is available */}
          {!isLoading && data && data.map((coin) => {
            return (
              <div
                onClick={() => HandleCoinRedirect(coin.id)}
                key={coin.id}
                className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent cursor-pointer"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} alt="Coin Image" className="w-full h-full"  loading="lazy" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>
                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_percentage_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="text-2xl text-white btn btn-primary btn-wide"
          >
            Prev
          </button>
          <div>Page-{page}</div>
          <button
            onClick={() => setPage(page + 1)}
            className="text-2xl text-white btn btn-secondary btn-wide"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CoinTable;
