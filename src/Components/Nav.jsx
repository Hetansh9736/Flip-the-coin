import React, { useState } from 'react';
import Avatar from '../Assets/Avatar.png';
import Gift from '../Assets/Gift.png';

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className='flex justify-center items-center p-6'>
                <div className="container w-full max-w-screen-xl h-11 flex items-center justify-between">
                    <div id="user" className='flex items-center'>
                        <div className='bg-gradient-to-b from-[#FFC369] to-[#FFBF5F] p-0.5 rounded-lg'>
                            <div className="avatar bg-gradient-to-r from-[#140105] to-[#7A061F] rounded-lg">
                                <img src={Avatar} width="52px" height="54px" alt="Avatar" />
                            </div>
                        </div>
                        <div className="id px-[14px] py-[8px] bg-[#9F1431] rounded-r-[10px] flex items-center">
                            <p className='text-2xl font-medium'>450064</p>
                        </div>
                    </div>

                    <div className="btns flex gap-2">
                        <div className="btn1 hidden md:flex bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] py-[10px] px-[16px] gap-1 rounded-[4px] border-t-2 border-white border-opacity-60 cursor-pointer">
                            <img src={Gift} alt="Gift" />
                            <p className='text-[#9F1431] font-medium text-[16px]'>SEND GIFTS</p>
                        </div>
                        <div className="btn2 hidden md:flex bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] py-[10px] px-[16px] items-center rounded-[4px] uppercase border-t-2 border-white border-opacity-60 cursor-pointer">
                            <p className='text-[#9F1431] font-medium font-Lilita One'>Leaderboard</p>
                        </div>
                        <div className="btn3 hidden md:flex bg-gradient-to-r from-[#C40D3B] to-[#C22948] py-[10px] px-[16px] items-center rounded-[4px] border-t-2 border-white border-opacity-10 cursor-pointer">
                            <p className='text-[#F0C98D] font-medium font-Lilita One'>0x1234...abcd</p>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <button className="text-[#9F1431] font-medium">
                            <span className="block w-8 h-1 mb-2 bg-[#9F1431]"></span>
                            <span className="block w-8 h-1 mb-2 bg-[#9F1431]"></span>
                            <span className="block w-8 h-1 bg-[#9F1431]"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#9F1431] p-4 flex flex-col gap-4 max-w-3xs ml-auto mr-6 rounded-[8px]">
                    <div className="btn1 flex bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] py-[10px] px-[16px] gap-1 rounded-[4px] border-t-2 border-white border-opacity-60">
                        <img src={Gift} alt="" />
                        <p className='text-[#9F1431] font-medium text-[16px]'>SEND GIFTS</p>
                    </div>
                    <div className="btn2 flex bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] py-[10px] px-[16px] items-center rounded-[4px] uppercase border-t-2 border-white border-opacity-60">
                        <p className='text-[#9F1431] font-medium font-Lilita One'>Leaderboard</p>
                    </div>
                    <div className="btn3 flex bg-gradient-to-r from-[#C40D3B] to-[#C22948] py-[10px] px-[16px] items-center rounded-[4px] border-t-2 border-white border-opacity-10">
                        <p className='text-[#F0C98D] font-medium font-Lilita One'>0x1234...abcd</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;
