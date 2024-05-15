import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/img3.png'

export const Header = () => {
  
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);  
  const { itemAmount } = useContext(CartContext)

useEffect(() =>{
  window.addEventListener('scroll', () =>{
   window.scroll > 60 ? setIsActive(true) : setIsActive(false);
 });
});

  return (
    <Header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center
    justify-between h-full'>
    <NavLink to={'/'}>
      <div>
        <img className='w-[40px]' src={Logo} alt="" />
      </div>
    </NavLink>
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer
    flex relative max-w-[50px]'>
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2
      text-[12px] w-[18px] h-[18px] text-white reunded-full flex justify-center
      items-center'>{itemAmount}</div>
    </div>
    </div>
    </Header>
  )
}