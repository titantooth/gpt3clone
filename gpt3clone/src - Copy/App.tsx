// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from "./component"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src='https://ps.w.org/primary-cat/assets/icon-256x256.jpg?rev=2450877' className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 6)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//     </>
//   )
// }



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <nav />
        <header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}


export default App