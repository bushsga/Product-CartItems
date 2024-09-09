import Image from 'next/image';
import React from 'react';
import { useProductContext } from '../../lib/product-context';

const CartItem = ({ cartItem }) => {
  const { removeCartItem } = useProductContext();

  const onClickHandler = () => {
    removeCartItem(cartItem.name)
  }
  return (
    <div className='flex justify-between items-center py-2'>
      <div>
        <p className='font-bold text-sm text-rose-900'>{cartItem.name}</p>
        <p className='text-sm'>
          <span className='mr-2 text-red font-medium'>{cartItem.quantity}x</span>
          <span className='mr-2 text-rose-300'>@ ${cartItem.price}</span>
          <span className='text-rose-500 font-medium'>${(cartItem.quantity * cartItem.price).toFixed(2)}</span>
        </p>
      </div>
      <button className='rounded-full border border-rose-300 hover:border-rose-500  p-1' onClick={onClickHandler}>
        <Image src={"/assets/images/icon-remove-item.svg"} alt='img' width={10} height={10}/>
      </button>
    </div>
  )
}

export default CartItem
