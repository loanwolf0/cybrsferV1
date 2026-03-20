import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Testimonial.css'
import man from '..//..//assets/hero 2.jpg'
const Testimonial = () => {

  useEffect(() => {
    // Initialize VanillaTilt on component mount for each .Testi-box
      const testiBoxes = document.querySelectorAll('.Testi-box');

      testiBoxes.forEach((box) => {
          VanillaTilt.init(box, {
              max: 15,
              speed: 400,
              glare: true
          });
      });

      // Clean up VanillaTilt on component unmount for each .Testi-box
      return () => {
          testiBoxes.forEach((box) => {
              box.vanillaTilt.destroy(); // Destroy the VanillaTilt instance for each box
          });
      };
    }, []);


  return (
    <div className='Testi-container mt-20'>
        <div className="Testi-box">
            <div className="Testi-elements Testi-bg "></div>
            <div className="Testi-elements Testi-imgBx">
                <img src={man} alt="man"/>
            </div>
            <div className="Testi-elements Testi-name">
                <h2> Someone Famous</h2>
            </div>
            <div className="Testi-elements Testi-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quas quidem laudantium quam  dolorem placeat deleniti iusto?</p>
            </div>
            <div className="card"></div>
        </div>  
    </div>
  )
}

export default Testimonial