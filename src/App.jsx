import React from 'react'
import logo from "./images/olotuLogo.png";
import profileImage from "./images/right-grid-boy-photo.png"

function App() {
  return (
    <div>
      <div className='bg-[#F59E0B] flex justify-between items-center'>
        <div>
          <img src={logo} alt="olotu square logo" className='w-50 py-3 pl-10'/>
        </div>
        <button className='bg-white text-[#F59E0B] mr-10 px-9 cursor-pointer rounded-xl h-10'>Register Now</button>
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center'>
         <p className='font-fredoka'>Tech Explorer's Bootcamp 2 <span>for kids aged 5-15</span></p>
        </div>
        <div>
          <img src={profileImage} alt="boy with toys" className='w-100'/>
        </div>
      </div>
    </div>
  )
}

export default App