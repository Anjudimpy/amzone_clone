import Image from 'next/image';
import logo from '../images/ameee/amplogo.png';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amp_light text-gray-400 flex items-center justify-center
 gap-4'>
    <Image className='w-28 h-20' src={logo} alt='logo'/>
    <p className='text-sm mt-4'>All rights reserved {" "}
    <a className='hover:text-white hover:underline decoration-[1px]
    cursor-pointer duration-300' href='https://ampeet.com'>@ampeet</a></p>
    </div>
  )
}

export default Footer
