import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '../../images/ameee/amplogo.png';
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { stateProps } from '../../../type';
import { useSession, signIn, signOut } from 'next-auth/react';
import { addUser } from '@/store/nextSlice';

const Header = () => {
  const dispatch = useDispatch();
  const {productData, favoriteData, userInfo}= useSelector(
    (state:stateProps)=>state.next 
  );
  const{data:session} = useSession();
  
  useEffect(()=>{
    if(session){
      dispatch(addUser({
          name:session?.user?.name,
          email:session?.user?.email,
          image:session?.user?.image,
        })
      )};
  },[session]);


  return (
    <div className='w-full h-24 bg-amp_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center
       justify-between gap-1 mdl:gap-3 px-4'>
        {/* logo */}
        <Link href={'/'}  className='px-2 cursor-pointer duration-300 items-center justify-center h-[90%]'>
            <Image src={logo} alt='logoimg' className='p-0 w-48 h-16'/>
            <span className='text-[12.4px] font-bold text-white hover:text-amp_red'>Ampee Engineering Tools & Fab</span>
        </Link>
        {/* searchbar */}
        <div className='flex-1 h-10 hidden mdl:inline-flex items-center justify-between relative'>
            <input className='w-full h-full rounded-sm px-2 placeholder:text-sm text-base text-black outline-none border
            focus-visible:border-amp_red' type='text' placeholder=' Search Product'/>
            <span className='w-12 h-full bg-amp_red text-white text-2xl flex
            items-center justify-center absolute right-0 rounded-sm rounded-tl-none rounded-bl-none'>
                <FaSearch/>
            </span>
        </div>
        {/* sign */}
        {userInfo?<div className='flex h-10 hidden md:inline-flex items-center  gap-1 relative cursor-pointer pl-8 hover:text-amp_red hover:border p-2 rounded-sm duration-300 '>
          <img src={userInfo.image} alt='user Image' className='w-8 h-8 rounded-full object-cover'/>
          <div className='text-xs text-gray-100 flex flex-col justify-between'>
            <p className='text-white font-bold'>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>

        </div>:<div onClick={()=>signIn()} className='flex h-10 hidden md:inline-flex items-center  gap-1 relative cursor-pointer pl-8 hover:text-amp_red hover:border p-2 rounded-sm duration-300 '>
            <span className=' text-2xl items-center justify-center '><FaCircleUser/></span>
            <p className=' font-bold items-center justify-center'>Sign In </p>
            <span>< IoMdArrowDropdown/></span>  </div>
            }
            {/* favorite */}
            <div className='px-2 border border-transparent hover:border-white
            cursor-pointer duration-300 items-center justify-center relative'>
               <p className=' font-bold'>Marked & Favorites</p>
               {
                favoriteData.length >0 &&(
                  <span className='absolute font-bold left-[70px] top-[-10px] w-6 h-4  flex items-center justify-center text-amp_red'>
                    {favoriteData.length}
                  </span>
                )
               }
              </div>
            {/* cart */}
            <Link href={'/cart'} className='flex-2 px-2 hidden sm:inline-flex items-center  gap-1 relative cursor-pointer hover:text-amp_red  hover:border p-2 rounded-sm duration-500 '>
            <p className=' font-bold items-center justify-center px-2'>Cart</p>
            <span className=' text-2xl items-center justify-center '><FaCartArrowDown/></span>
            <span className='absolute text-amp_red text-xs top-[-4px] left-[65px] font-bold'>
            {productData ? productData.length : 0}
            </span>
            </Link>
            {/* help */}
            <div className='flex-2 px-2 hidden xs:inline-flex items-center  gap-1 relative cursor-pointer  hover:text-amp_red hover:border p-2 rounded-sm duration-500 '>
            <p className=' font-bold items-center justify-center'>Help</p>
            <span className=' text-2xl items-center justify-center '><IoMdHelpCircleOutline/></span>
            </div>

            {/* <div className='flex-2 px-2 hidden xs:inline-flex items-center  gap-1 relative cursor-pointer  hover:text-amp_red duration-300 hover:border p-2 rounded-sm duration-500 '>
            
            <span className=' text-2xl items-center justify-center '><LiaSignOutAltSolid/></span>
            <p className=' font-bold items-center justify-center'>Sign Out</p>
            </div> */}


      </div>
    </div>
  );
}

export default Header
