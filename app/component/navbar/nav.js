'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='lg:px-10 md:px-7 sm:px-6 px-3 pr-[100px] flex justify-between items-center bg-[#022136]'>
            <div className='flex sm:justify-between md:gap-5 gap-2 items-center'>
                <div>
                    <Image className='md:w-auto sm:w-[50px] w-[30px]' src="/dgmlogo.png" width="50" height="50" />
                </div>
                <div>
                    <h1 className='uppercase text-white lg:text-2xl md:text-xl text-xs font-PlayFair font-semibold'> dominion gospel ministry</h1>
                </div>
                <div className='lg:hidden flex justify-end absolute right-6'>
                    <i
                        className='fa-sharp fa-solid fa-bars text-xl text-white cursor-pointer'
                        onClick={() => setIsMenuOpen(true)}
                    ></i>
                </div>
            </div>
            {/* LARGE VIEW MENU */}
            <div className='hidden lg:flex lg:gap-10 gap-3 text-white text-lg font-Poppins'>
                <Link className='hover:text-[#20a6ff] focus:text-[#20a6ff]' href='/'> Home </Link>
                <Link className='hover:text-[#20a6ff] focus:text-[#20a6ff]' href='/about'> About </Link>
                <Link className='hover:text-[#20a3fa] focus:text-[#20a6ff]' href='/team'> Team </Link>
                <Link className='hover:text-[#20a6ff] focus:text-[#20a6ff]' href='/sermon'> Sermon </Link>
                <Link className='hover:text-[#20a6ff] focus:text-[#20a6ff]' href='/gallery'> Gallery </Link>
                <Link className='hover:text-[#20a6ff] focus:text-[#20a6ff]' href='/contact'> Contact </Link>
            </div>

            {/* mobile view menu */}
            {isMenuOpen && (
                <div className='lg:hidden absolute bg-[#113c57] text-base md:text-lg min-h-screen min-w-[50%] top-0 right-0 flex flex-col justify- shadow-lg text-white gap-10'>
                    <i className='fa-sharp fa-solid fa-xmark text-2xl cursor-pointer text-right pr-3 pt-3' onClick={() => setIsMenuOpen(false)} ></i>

                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/'> Home </Link>
                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/about'> About </Link>
                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/team'> Team </Link>
                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/sermon'> Sermon </Link>
                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/gallery'> Gallery </Link>
                    <Link className='hover:text-[#022136] focus:text-[#022136] pl-5' href='/contact'> Contact </Link>
                </div>
            )}
        </div>
    )
}

export default Nav