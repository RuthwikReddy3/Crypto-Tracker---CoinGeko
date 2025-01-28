import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";  // ✅ Use latest package
import { Fetchcoindata } from "../../Services/Fetchcoindata";

function CoinTable() {
  const [page, setPage] = useState(1);

  // ✅ Ensure `useQuery` is used correctly
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => Fetchcoindata(page, "usd"),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>
        {data?.coins?.map((coin) => (
          <div key={coin.id}>{coin.name} - {coin.price} USD</div>
        ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      {isFetching && <div>Loading new data...</div>}
    </>
  );
}

export default CoinTable;
