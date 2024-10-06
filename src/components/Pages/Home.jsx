import React from 'react'
import '../../styles/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const naviagte =useNavigate();
  return (
    <div className="home-container">
    <h1>Welcome to the AR Measurement Tool</h1>
    <p>
      Use your phone's camera to measure objects in real-time. This tool allows
      you to measure small items like a nut, or larger objects like a door or a car.
    </p>
    <button onClick={ ()=> naviagte('/Measure')}>Start Measuring</button>

    <footer>© 2024 AR Measure | Powered by React</footer>
  </div>
  )
}

export default Home