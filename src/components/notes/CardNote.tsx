"use client"
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiCalendar, FiClipboard, FiEdit } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'

const CardNote = ({ time, title, desc } : any) => {
    return (
        <div className='relative dark:bg-slate-700 bg-gray-100 p-5 rounded-2xl flex flex-col gap-3'>
            <div className="absolute right-3 top-3 text-xl flex gap-2 items-center">
                <div className="hover:scale-125 transition cursor-pointer">
                    <FiEdit className='text-yellow-400' />
                </div>
                <div className="hover:scale-125 transition cursor-pointer">
                    <AiOutlineDelete size={24} className='text-red-400' />
                </div>
            </div>

            <div className="flex gap-2 items-center text-gray-400 font-bold">
                <FiCalendar size={21} />
                <h3>Friday - 7 July</h3>
            </div>

            <div className="flex gap-2 items-center font-bold text-xl">
                <GoDotFill className='text-blue-500' />
                <h3>Note Title</h3>
            </div>

            <div className="flex gap-2">
                <div className="mt-1">
                    <FiClipboard size={22} />
                </div>
                <p className='dark:bg-slate-800 bg-white p-4 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam aspernatur omnis dolor deserunt rerum est ipsum totam debitis! Voluptatibus!</p>
            </div>
        </div>
    )
}

export default CardNote