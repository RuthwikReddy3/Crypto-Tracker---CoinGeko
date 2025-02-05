import { FetchCoinHistoricData } from "../../Services/FetchCoinHistoricData";
import { useQuery } from "@tanstack/react-query"; // Updated import
import CoinInfo from "./CoinInfo";
import currencyStore from "../../Zustandstate/Store";
import { useState } from "react";
import Alert from "../Alert/Alert.jsx"

function CoinInfoContainer({ CoinId }) {
  const [days, setCoinDays] = useState(1);
  const { currency } = currencyStore();
  const [interval, setCoinInterval] = useState(''); // Set a default value

  // Fetch historical coin data using object syntax
  const {data: historicData,isLoading,isError,error} = useQuery({
    queryKey: ["coinHistoricData", CoinId, interval, days, currency],
    queryFn: () => FetchCoinHistoricData(CoinId, interval, days, currency),
    retry: 2, // Retry fetching in case of failure
    cacheTime: 1000 * 60 * 2, // Cache data for 2 minutes
    staleTime: 1000 * 60 * 2, // Stale time of 2 minutes before refetching
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  // Error Handling
  if (isError) {
    return <Alert message="Error fetching data" type="error"/>
  }

  return (
    <>
      <CoinInfo historicData = {historicData} setDays = {setCoinDays} setInterval = {setCoinInterval} days={days} currency={currency}/> {/* Pass fetched data to CoinInfo */}
    </>
  );
}

export default CoinInfoContainer;
