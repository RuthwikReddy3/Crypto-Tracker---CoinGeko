import axiosInstance from "../Helpers/AxiosInstance";

export async function Fetchcoindata(){
    try{
       const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
       console.log(response);
       return response;
    }
    catch(error){
          console.error(error);
          return null;
    }
}