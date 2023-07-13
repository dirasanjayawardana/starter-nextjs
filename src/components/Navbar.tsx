"use client"
import { useStateContext } from '@/contexts/ContextProvider'
import React from 'react'
import { FiHome, FiMenu, FiUser } from 'react-icons/fi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Navbar = () => {

    const { showSidebar, setShowSidebar, currentColor } = useStateContext()

    return (
        <div className='mt-5 mx-5 p-2 flex justify-between'>
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="text-2xl hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl p-2">
                <FiMenu />
            </button>

            {/* <div className='hidden sm:flex gap-2 items-center text-xl font-bold'>
                <FiHome className='text-2xl' />
                <h3>Homepage</h3>
            </div> */}

            <div className="flex gap-2 items-center hover:scale-110 transition-all cursor-pointer">
                <div className={`bg-[${currentColor}] p-2 rounded-full text-white`}>
                    <FiUser className='' />
                </div>
                <h3>Profile</h3>
                <MdOutlineKeyboardArrowDown />
            </div>
        </div>
    )
}

export default Navbar