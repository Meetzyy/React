import './App.css'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { StrictMode } from 'react'

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="border">
          <hr />
        </div>
        <Content />
        <div className="border"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
