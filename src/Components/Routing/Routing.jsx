import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import CustomErrorBoundary from "../Custom Error Boundary/CustomErrorBoundary";

// Lazy loading pages
const Home = lazy(() => import("../../Pages/Home"));
const Coindetailspage = lazy(() => import("../../Pages/CoinDetailsPage"));

function Routing() {
  return (
   <CustomErrorBoundary>
    <Suspense fallback={<div className="flex items-center justify-center w-full h-full"><div className="loading loading-spinner loading-lg"></div></div>}>  {/* handles blank screen while fetching lazy loaded resourses. */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:coinId" element={<Coindetailspage />} />
        </Route>
      </Routes>
    </Suspense>
   </CustomErrorBoundary>
  );
}

export default Routing;
