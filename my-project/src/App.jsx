import { useState } from 'react'
import reactLogo from './assets/react.svg'
import k from './assets/img/k.svg'
import kk from './assets/img/kk.svg'
import logo_ebath from './assets/img/logo_ebath.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="" target="_blank">
          <img src={k} className="logo react" alt="React logo" />
        </a>
      </div>
      <img src={kk} alt="" width={100} height={100} />
      <img src={logo_ebath} alt="" width={100} height={100} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
