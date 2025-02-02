import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Coindetailspage from "../../Pages/CoinDetailsPage";
import MainLayout from "../../Pages/Layout";



function Routing() {
  return (
      
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes inside MainLayout */}
          <Route index element={<Home />} />
          <Route path="details/:coinId" element={<Coindetailspage />} />
        </Route>
      </Routes>
    
  );
}

export default Routing;
