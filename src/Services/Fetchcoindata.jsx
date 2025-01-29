import axiosInstance from "../Helpers/AxiosInstance";

export async function Fetchcoindata(page = 1,currency = 'usd'){
    const perPage = 10;
    try{
       const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
       console.log(response.data);
       return response.data;
    }
    catch(error){
          console.error(error);
          return null;
    }
}