import React from 'react'
import Close from '../Assets/Close.png'

function Leaderboard() {
    return (
        <div className="container w-[500px] flex flex-col gap-2">
            <div className="box flex justify-end">
                <div className="close w-[32px] h-[32px] bg-gradient-to-r from-[#DBDBDB] to-[#A5A5A5] flex items-center justify-center rounded-[5px] cursor-pointer">
                    <img src={Close} alt="Close" />
                </div>
            </div>
            <div className="bg-[#9F1431] p-2 rounded-[8px]">
                <table className="w-full text-md font-light flex flex-col gap-3">
                    <thead>
                        <tr className="bg-[#9F1431] text-[#F0C98D] rounded-[8px] w-full flex justify-between text-center">
                            <th className="p-4 w-1/4 flex justify-start">Rank</th>
                            <th className="p-4 w-2/4">Address</th>
                            <th className="p-4 w-1/4 flex justify-end">Score</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col gap-3 max-h-[400px] overflow-y-scroll scrollbar-hide">
                        <tr className="bg-gradient-to-r from-[#FFC369] to-[#FFBF5F] text-[#88102A] rounded-[8px] w-full flex  justify-between text-center">
                            <td className="p-4 ">1564</td>
                            <td className="p-4">Meowman</td>
                            <td className="p-4">1554</td>
                        </tr>
                        {[...Array(10)].map((user, index) => (
                            <tr key={index} className="bg-[#88102A] text-[#FFFFFF] rounded-[8px] w-full flex justify-between text-center">
                                <td className="p-4 w-1/4 flex justify-start">{index + 1}</td>
                                <td className="p-4 w-2/4">hrsh.ok</td>
                                <td className="p-4 w-1/4 flex justify-end">1554232</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard