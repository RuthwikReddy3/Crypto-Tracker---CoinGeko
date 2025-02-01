import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/Navbar";

function MainLayout(){
    return(
        <>
           <NavBar/>   {/* shared ui across all pages*/}
           <Outlet/>   {/*place holder for upcoming ui to be added or actual page is shown here */}
        </> 
     );
}
export default MainLayout;