import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mylogo from './assets/youtube.png'
import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import Parent1 from './components/ParentComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Parent1 />
      <div class = "d-flex justify-content-md-end">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={mylogo} class="you-logo logo" alt="youtube logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count you clicked is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br />Youtube logo is useless
      </p>
    </>
  )
}

export default App
