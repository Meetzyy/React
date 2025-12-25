import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <div className="main">
        <div className="header">
          <p className="title">D U A L &nbsp; L I S T S &nbsp; A P P L I C A T I O N</p>
          <p className="subtitle">A Showcase of top Furniture Brands and popular Furniture Items worldwide.</p>
        </div>

        <div className="content">

          <p className="brands-title" >T O P &nbsp; F U R N I T U R E &nbsp; B R A N D S</p>

          <div className="brands">
            <div className="card1">
              <p>1. BOCA DO LOBO</p>
            </div>
            <div className="card2">
              <p>2. MINOTTI</p>
            </div>
            <div className="card3">
              <p>3. POLIFORM</p>
            </div>
            <div className="card4">
              <p>4. ROCHE BOBOIS</p>
            </div>
          </div>

          <p className="items-title" >P O P U L A R &nbsp; F U R N I T U R E &nbsp; I T E M S</p>

          <div className="items">
            <div className="item1">
              <p>1. EAMES LOUNGE CHAIR & OTTOMAN</p>
            </div>
            <div className="item2">
              <p>2. EGG CHAIR</p>
            </div>
            <div className="item3">
              <p>3. NOGUCHI COFFEE TABLE</p>
            </div>
            <div className="item4">
              <p>4. PANTON CHAIR</p>
            </div>
          </div>

        </div> 
      </div>

    </>
  )
}

export default App
