import React from 'react';
import { useState } from 'react';
import './Product.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import BackgroundVideo from './assets/Images/RM 3001 Background Video.mp4'


function Product() {

  const [liked, setLiked] = useState(false);

  return (
    <>
        <div className="main">
          <video src={BackgroundVideo} autoPlay loop muted></video>

            <div className="banner">

                <div className="header">

                  <div className="backbtn">
                    <FaChevronLeft className='lefticon'/>
                    <p>BACK TO HOME</p>
                  </div>

                  <div className="heartbtn" onClick={() => setLiked(!liked)}>
                    {
                      liked 
                        ? <FaHeart className="heart" />
                        : <FaRegHeart className="heart" />
                    }
                  </div>

                </div>

                <div className="image"></div>

                <div className="description">
                      <p className="name">RICHARD MILLE 30-01</p>
                      <p className="calibre">CALIBRE RMAR2</p>
                      <p className="price">Rs. 28,764,489</p>
                      <p className="details">Skeletonised automatic-winding movement with hours, minutes, seconds, oversize date, clutch engagement and power-reserve indicators, function selector and declutchable variable-geometry rotor.</p>
                      <div className="btns">
                        <p className="cartbtn">ADD TO CART</p>
                        <p className="wishlistbtn">WISHLIST</p>
                      </div>
                </div>

            </div>

        </div>

    </>
  )
}

export default Product