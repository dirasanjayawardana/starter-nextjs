"use client"
import React, { useState, useEffect } from 'react'
import { FiCalendar, FiChevronsRight, FiClock } from 'react-icons/fi'
import { LuCalendarClock } from 'react-icons/lu'

const Header = ({ page, item } : {page : any ; item : any}) => {

    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();
    const hour12 = currentDate.getHours() % 12 || 12;
    const minute = currentDate.getMinutes();
    const [second, setSecond] = useState(currentDate.getSeconds());

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    useEffect(() => {
        const interval = setInterval(() => {
          setSecond(new Date().getSeconds());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div className='mt-3 mb-5 bg-gray-100 dark:bg-slate-700 p-5 rounded-2xl'>
            <div className="flex gap-3 items-center">
                <h3 className='text-2xl font-bold'>{page}</h3>
                <FiChevronsRight size={24} />
                <h3 className='text-xl'>{item}</h3>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xl">
                    <FiCalendar />
                    <h3 className='font-bold'>{days[day]} -</h3>
                    <h3>{date}</h3>
                    <h3>{months[month]}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <FiClock className='mt-[2px] text-xl' />
                    <h3 className='text-md md:text-2xl font-bold'>{hour12} : {minute}</h3>
                    <h3 className='font-bold'>{hour >= 12 ? "PM" : "AM"}</h3>
                </div>
            </div>

        </div>
    )
}

export default Header