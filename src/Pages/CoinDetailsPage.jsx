import { useParams } from "react-router-dom";

function Coindetailspage(){
    const {coinId} = useParams();
   return(
    <div>
        <h1>Coin details page {coinId} </h1>
    </div>
   );
}
export default Coindetailspage;