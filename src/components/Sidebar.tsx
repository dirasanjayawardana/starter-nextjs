"use client"
import react from 'react'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { sidebarData } from '../data/data'
import { useStateContext } from '@/contexts/ContextProvider'

const Sidebar = () => {

	const { showSidebar, setShowSidebar, showActiveSide, setShowActiveSide, currentColor } = useStateContext();

	return (
		<div className={`${showSidebar ? "w-72" : "w-0 -translate-x-96 overflow-hidden"} transition-all duration-500 fixed top-0 left-0`}>
			<div className='bg-white dark:bg-slate-800 h-screen shadow-xl p-2 overflow-y-hidden hover:overflow-y-auto cursor-pointer'>
				<div className="ml-5 mr-3 mt-5 text-xl flex justify-between gap-3 items-center">
					<h3>
						<span
							style={{ color: currentColor }}
							className={`font-bold text-3xl`}>D</span>ir
						<span
							style={{ color: currentColor }}
							className={`font-bold text-3xl`}>A</span>pp
					</h3>
					<button
						onClick={() => setShowSidebar(false)}
						className="hover:bg-white dark:hover:bg-slate-800 p-2 rounded-xl"
					>
						<MdOutlineKeyboardArrowLeft />
					</button>
				</div>

				<div className="mt-12 flex flex-col gap-2">
					<Link href='/'>
						<div className="font-bold flex gap-3 items-center hover:bg-white dark:hover:bg-slate-800 px-4 py-2 rounded-xl">
							<FiHome className='text-xl' />
							<h3 className=''>Home</h3>
						</div>
					</Link>

					{sidebarData.map((items, index) => (
						<div
							key={index}
							className={`px-4 py-2 rounded-xl`}
						>
							<div className="flex gap-3 items-center font-bold">
								<div className="text-xl">{items.icon}</div>
								<h3 className=''>{items.header}</h3>
							</div>
							<hr className='mt-2' />
							<div
								className={`transition-all duration-300 ml-3 mt-2 flex flex-col gap-2`}
							>
								{items.pages.map((item, index) => (
									<Link key={index} href={item.link}>
										<button
											onClick={() => setShowActiveSide(item.id_active)}
											className='w-full'>
											<div
												className={`${showActiveSide === item.id_active ? `bg-[${currentColor}] hover:bg-[${currentColor}] text-white` : "hover:bg-white dark:hover:bg-slate-800"} flex gap-3 items-center px-4 py-2 hover:scale-110 transition duration-300 rounded-xl mr-1`}
											>
												<div className="">{item.icon}</div>
												<h3 className=''>{item.name}</h3>
											</div>
										</button>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar