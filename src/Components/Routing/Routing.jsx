import { Routes,Route  } from "react-router-dom";
import Home from "../../Pages/Home";
import Coindetailspage from "../../Pages/CoinDetailsPage";

function Routing(){
  return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:coinId" element={<Coindetailspage/>}/>
        </Routes>
  );
}
export default Routing;