import React from 'react'
import Close from '../Assets/Close.png'
import Gift from '../Assets/Gift2.png'

function GiftCard() {
  return (
    <div className='w-[400px] h-[402px] flex flex-col gap-2'>
      <div className="box flex justify-end">
        <div className="close w-8 h-8 bg-gradient-to-r from-[#DBDBDB] to-[#A5A5A5] flex items-center justify-center rounded-[5px] cursor-pointer">
          <img src={Close} alt="Close" />
        </div>
      </div>
      <div className='bg-[#9F1431] px-2 py-4 flex flex-col gap-3 items-center rounded-[8px]'>
        <div className='bg-[#9F1431] p-2 w-[40px] h-[40px] rounded-full border-[2.5px] border-[#88102A]'>
          <img src={Gift} alt="" />
        </div>
        <div>
          <p className='uppercase text-2xl text-[#F0C98D]'>Gift your Punches</p>
        </div>
        <div className='bg-[#88102A] flex justify-between p-4 items-center w-full rounded-md gap-2'>
          <input type="text" placeholder='Enter Username' className='uppercase outline-none text-[#FFFFFF66] text-md w-full' />
          <button className='py-1 px-2 bg-[#C22948] uppercase text-xs rounded-full'>paste</button>
        </div>
        <div className='bg-[#88102A] flex justify-between p-4 items-center w-full rounded-md'>
          <input type="text" placeholder='Number of tokens' className='uppercase outline-none text-[#FFFFFF66] text-md w-full' />
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
          <button className='py-2 px-5 bg-[#C22948] uppercase text-xs rounded-full '>1000 taps</button>
          <button className='py-2 px-5 bg-[#C22948] uppercase text-xs rounded-full '>5000 taps </button>
          <button className='py-2 px-5 bg-[#C22948] uppercase text-xs rounded-full '>10000 taps</button>
          <button className='py-2 px-3 bg-[#C22948] uppercase text-xs rounded-full '>MAX</button>
        </div>
            <button className='uppercase px-4 py-2.5 bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] w-full text-[#9F1431] border-t-[2px] border-white shadow-[0_2px_0_0_rgb(0,0,0)] rounded-[4px] cursor-pointer text-md'>deposit</button>
      </div>
    </div>
  )
}

export default GiftCard