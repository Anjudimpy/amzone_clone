import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { stateProps } from '../../../type';
import { signOut } from 'next-auth/react';
import { removeUser } from '@/store/nextSlice';


const HeaderBottom = () => {
  const {userInfo} = useSelector((state:stateProps)=>state.next);
  const dispatch =useDispatch();
  const handleSignOut = ()=>{
    signOut();
    dispatch(removeUser());
  }

  return (
    <div className='w-full h-10 px-2 bg-amp_red  text-white flex items-center font-bold justify-center text-[9px] lg:text-sm'>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'><IoMdMenu/>All</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Today Offer</p>
      <p className='flex items-center gap-1 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Sell</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Gel</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Consumables</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Calibration Block</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>NDT Probes & Accessories</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Safety Accessories</p>
      <p className='flex items-center gap-2 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300'>Welding Equipment & Accessories</p>
      
      {userInfo && (<button onClick={handleSignOut} className='hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent hover:boredr-red-600
      hover:text-red-500 text-amp_red cursor-pointer duration-300'>
        signOut
      </button>)}
    </div>
  )
}

export default HeaderBottom
