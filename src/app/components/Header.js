import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#232536] border-b border-[#ffffff18]'>
      <div className='container mx-auto flex gap-4 w-full h-[70px] text-white items-center p-4 justify-between'>
        <Link href={"/"} className='text-3xl cursor-pointer font-bold hover:opacity-70 duration-500'>{"{Finsweet"}</Link>
        <ul className='gap-6 flex'>
          <Link href={"/"}>Home</Link>
          <Link href={"/service"}>Service</Link>
          <Link href={"/company"}>Company</Link>
          <Link href={"/career"}>Career</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/"} className='text-yellow-100'>Clone project →</Link>
        </ul> 
      </div>
    </div>
  )
}

export default Header