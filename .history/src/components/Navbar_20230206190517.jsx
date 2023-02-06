import React from 'react'
import { FiSearch, FiList, FiHeart, FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
    return (
        <>
            <nav
                className="sticky top-0 w-full flex items-center justify-between py-4 bg-white text-black shadow-none lg:shadow-md navbar navbar-expand-lg navbar-light px-5 z-40"
            >
                {/* <div className="bg-purple-5 px-3 py-2 text-xl text-black font-extralight">SecondHand</div> */}
                <div className="w-8 lg:w-auto lg:flex-grow-0">
                    <div className="lg:flex gap-4 items-center text-2xl hidden">
                        {/* <FiList /> */}
                        <h1>Real Estate Finder</h1>
                    </div>
                </div>
                <div className="hidden lg:flex gap-5 items-center lg:flex-grow-0">
                    <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
                        <input
                            className="w-full h-full bg-transparent focus:outline-none"
                            placeholder="Cari di sini ..."
                        />
                        <FiSearch className="text-2xl" />
                    </div>
                </div>


                <div className="w-8 lg:w-auto lg:flex-grow-0">
                    <div className="lg:flex gap-4 items-center text-2xl hidden">
                        <FiBell />
                        <FiHeart />
                        <FiUser />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar