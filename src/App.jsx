import { useState } from 'react'
import './App.css'
import Background from './Assets/Background.png'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Leaderboard from './Components/Leaderboard'
import PreloadGas from './Components/PreloadGas'
import GiftCard from './Components/GiftCard'

function App() {

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center text-white fixed font-lilita "
        style={{
          backgroundImage: `url(${Background})`
        }}
      >
        <Nav />
        <div className="container flex justify-center">
          {/* <Leaderboard /> */}
          {/* <PreloadGas/> */}
        {/* <GiftCard/> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
