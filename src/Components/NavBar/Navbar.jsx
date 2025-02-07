import { useNavigate } from "react-router-dom";
import currencystore from "../../Zustandstate/Store";
import { useState } from "react";

function NavBar() {
  const { setCurrency } = currencystore();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function goToHome() {
    navigate("/");
  }

  function handleSearchBtnclick(event) {
    const id = searchTerm.toLowerCase();
    navigate(`/details/${id}`);
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li onClick={() => setCurrency("inr")}>
                <a>INR</a>
              </li>
              <li onClick={() => setCurrency("usd")}>
                <a>USD</a>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={goToHome} className="navbar-center">
          <a className="text-xl btn btn-ghost">Crypto Tracker</a>
        </div>
        <div className="flex items-center navbar-end">
          <input
            type="text"
            placeholder="Search crypto currency"
            className="w-40 mr-3 input input-bordered sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchBtnclick()} // Trigger search on Enter key
          />
          <button className="btn btn-info btn-sm" onClick={handleSearchBtnclick}>Search</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
