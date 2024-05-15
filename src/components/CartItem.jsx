import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  const handleRemove = () => {
    removeFromCart(id);
  };
  return (
    <div className='flex gap-x-4 py-2 lg:px-5 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <NavLink to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </NavLink>
      </div>
      <div>
        <NavLink to={`/product/${id}`}>
          <div className='flex justify-between mb-2'>
            <p className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </p>
            <div onClick={handleRemove} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
        </NavLink>
        <div className='w-full flex flex-col'>
          <div className='flex gap-x2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer h-full'>
                <IoMdRemove />
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            <div className='flex-1 flex items-center justify-around'>$ {price}</div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};