import React from 'react'
import { CircleUserRound } from 'lucide-react';

const Nav = () => {
  return (
    <>
    <div className='flex bg-black text-white justify-around h-20 items-center text-lg'>
    <div>
        <ul className='flex gap-5 '>
            <li>Logo</li>
            <li>Name</li>
            <li>About Us</li>
        </ul>
    </div>
    <div className='flex gap-5'>
    <p>Help</p>
    <CircleUserRound />
    </div>
    </div>
    </>
  )
}

export default Nav