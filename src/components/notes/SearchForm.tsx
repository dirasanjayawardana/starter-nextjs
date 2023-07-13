"use client"
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineFileAdd } from 'react-icons/ai'

const Searchform = () => {
    return (
        <div>
            <form className="dark:bg-slate-700 bg-gray-100 rounded-2xl py-2 px-6 flex items-center justify-between">
                <div className="flex gap-2 items-center justify-start">
                    <input type="text" placeholder='Search Notes' className='py-1 px-4 rounded-xl bg-transparent' />
                    <button type='submit' className='hover:scale-125 transition p-2 text-gray-400'><FiSearch size={24} /></button>
                </div>

                <div className="flex item-center gap-2 font-bold hover:scale-110 transition cursor-pointer">
                    <AiOutlineFileAdd size={24} />
                    <h3 className='hidden sm:inline'>Add New</h3>
                </div>
            </form>
        </div>
    )
}

export default Searchform