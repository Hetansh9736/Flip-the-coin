import React from 'react'
import Gas from '../Assets/Gas.png'
import Close from '../Assets/Close.png'

function PreloadGas() {
  return (
    <div className="container w-full max-w-[518px] mx-auto flex flex-col gap-2">
      <div className="box flex justify-end">
        <div className="close w-8 h-8 bg-gradient-to-r from-[#DBDBDB] to-[#A5A5A5] flex items-center justify-center rounded-[5px] cursor-pointer">
          <img src={Close} alt="Close" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 py-4 px-2 bg-[#9F1431] rounded-lg '>
        <div className='bg-[#9F1431] w-11 h-11 p-2 rounded-full border-[#88102A] border-[2.5px] flex justify-center items-center'>
          <img src={Gas} width="25px" height="25px" alt="Gas" />
        </div>
        <div>
          <p className='uppercase text-[#F0C98D] text-2xl font-bold text-center '>Preload gas</p>
        </div>
        <div className='w-full text-center uppercase'>
          <p className='text-xs'>Turbo fed onchain so preload some ETH to start tapping.</p>
          <p className='text-xs'> You are free to withdraw at any time!</p>
        </div>
        <div className='flex gap-2 flex-wrap flex-col md:flex-row w-full'>
          <div className="card flex flex-col justify-center items-center gap-2 p-4 bg-[#88102A] rounded-[6px] w-full sm:w-auto">
            <p className='uppercase text-md'>10,000 Punches</p>
            <button className='px-2 rounded-full  bg-[#9F1431] text-xs'>0.005 ETH</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-2 p-4 bg-[#88102A] rounded-[6px] w-full sm:w-auto">
            <p className='uppercase text-md'>50,000 Punches</p>
            <button className='px-2 rounded-full  bg-[#9F1431] text-xs'>0.025 ETH</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-2 p-4 bg-[#88102A] rounded-[6px] w-full sm:w-auto">
            <p className='uppercase text-md'>1,00,000 Punches</p>
            <button className='px-2 rounded-full  bg-[#9F1431] text-xs'>0.05 ETH</button>
          </div>
        </div>
        <button className='uppercase px-4 py-2.5 bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] w-full text-[#9F1431] border-t-[2px] border-white shadow-[0_2px_0_0_rgb(0,0,0)] rounded-tr-sm cursor-pointer text-md'>deposit</button>
      </div>
    </div>
  )
}

export default PreloadGas