import axiosInstance from "../Helpers/AxiosInstance";

export async function FetchCoindetails(id){
    const perPage = 10;
    try{
       const response = await axiosInstance.get(`/coins/${id}`);
       console.log(response.data);
       return response.data;
    }
    catch(error){
          console.error(error);
          return null;
    }
}