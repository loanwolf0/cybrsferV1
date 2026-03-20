import React from 'react'
import './Testimonials.css'
import Testimonial from '../Testimonial/Testimonial'

const Testimonials = () => {
    
  return (
    <div className="Testimonials-container mb-10">
      <div className="testi-title flex justify-center items-center w-full h-20 text-white  relative">
        <h2 className=" text-3xl md:text-4xl  w-100 font-bold rounded-xl">
          <span className='text-[rgb(255,255,255)]'>OUR </span>
          <span className='text-[rgb(104,68,202)]'> MENTORS!</span>
        </h2>
        <div className="underline"></div>
      </div>

      <div className='Testimonials'>
        <Testimonial />
        {/* <Testimonial /> */}
        {/* <Testimonial />    */}
      </div>
    </div>
    
  )
}

export default Testimonials