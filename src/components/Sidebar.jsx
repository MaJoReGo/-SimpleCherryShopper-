import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { CartItem } from './CartItem'; // Asegúrate de importar CartItem si está definido en otro archivo

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : 'right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({cart.length})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-w-hidden border-b'>
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />; // Renderiza cada item del carrito usando el componente CartItem
        })}
      </div>
      <div className='bg-pink-200 flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>${parseFloat(total).toFixed(2)}
          </div>
        </div>
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
      <NavLink className='bf-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View cart</NavLink>
      <NavLink className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</NavLink>
    </div>
  );
};
