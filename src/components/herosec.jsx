import React from 'react'
// import HeroImg from '../assets/HeroImg.webp'
import Darkbtn from './darkbtn'


function Herosec() {
  return (
    <div className='flex h-[500px] '>
      <div className='flex flex-col gap-10 justify-center w-[60%] p-10 '>
        <h1 className='font-bold text-5xl'>Your One-Stop Shop for Fashion, Jewelry, and Electronics</h1>
        <p>
        Discover a curated collection of stylish men's and women's clothing, elegant jewelry, and the latest in electronics all in one place. Whether you're looking to elevate your wardrobe, accessorize with stunning pieces, or upgrade your tech, we offer high-quality products at affordable prices. Shop with us for variety, value, and a seamless shopping experience.
        </p>
        <a href="">
        <Darkbtn/>
        </a>
            
        
      </div>
      <div className=' flex justify-center items-center '>
        {/* <img className='w-[500px] h-[400px] rounded-2xl' src={HeroImg} alt="" /> */}
      </div>


    </div>
  )
}

export default Herosec
