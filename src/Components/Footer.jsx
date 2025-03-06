import React from 'react'
import Punch from '../Assets/punch.png'
import Fire from '../Assets/Fire.png'
import Click from '../Assets/Click.png'

function Footer() {
    return (
        <>
            <footer className='fixed bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center pb-9 sm:pb-6 w-full'>
                <div className="container flex gap-2 items-center justify-center flex-wrap sm:gap-1">
                    <div className="punch h-12 lg:h-12 bg-[#9F1431] flex rounded-[10px] justify-center items-center border-2 border-[#FFC165]">
                        <div className="w-12 h-12 lg:w-12 lg:h-12 bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] flex justify-center items-center rounded-[10px] cursor-pointer">
                            <img src={Punch} className="w-8 h-8 lg:w-8 lg:h-8" alt="punch" />
                        </div>
                        <div className="hr flex items-center px-3.5 lg:px-3.5 gap-2">
                            <p className='text-2xl lg:text-2xl'>1/Hr</p>
                            <div>
                                <p className="leading-3 text-xs uppercase">Power</p>
                                <p className="leading-3 text-xs uppercase">Punch</p>
                            </div>
                        </div>
                    </div>
                    <div className="fire h-12 lg:h-12 bg-[#9F1431] flex rounded-[10px] justify-center items-center border-2 border-[#FFC165]">
                        <div className="w-12 h-12 lg:w-12 lg:h-12 bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] flex justify-center items-center rounded-[10px] cursor-pointer">
                            <img src={Fire} className="w-8 h-8 lg:w-8 lg:h-8" alt="fire" />
                        </div>
                        <div className="speed px-3.5 lg:px-3.5 uppercase font-[400]">
                            <p className='text-2xl lg:text-2xl'>2X</p>
                        </div>
                    </div>
                    <div className="Click h-12 lg:h-12 bg-[#9F1431] flex rounded-[10px] justify-center items-center border-2 border-[#FFC165]">
                        <div className="w-12 h-12 lg:w-12 lg:h-12 bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] flex justify-center items-center rounded-[10px] cursor-pointer">
                            <img src={Click} className="w-8 h-8 lg:w-8 lg:h-8" alt="click" />
                        </div>
                        <div className="hr flex items-center px-3.5 lg:px-3.5 gap-2">
                            <p className='uppercase text-2xl lg:text-2xl'>19k</p>
                            <div>
                                <p className="leading-3 text-xs uppercase">Clicks</p>
                                <p className="leading-3 text-xs uppercase">left</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer