import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CoinTable from './Components/CoinTable/CoinTable'
import NavBar from './Components/NavBar/Navbar'
function App() {
 const [currency,setCurrency] = useState('usd');
  return (
    <>
       <NavBar setCurrency={setCurrency}/>
       <Banner/>
       <CoinTable currency={currency}/>
    </>
  )
}

export default App;
