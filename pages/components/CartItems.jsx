import React, { useState } from 'react';
import { useProductContext } from '../context/product-context';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CartItem from './CartItem';
import Image from 'next/image';

const CartItems = () => {
  const [open, setOpen] = useState(false);
    const { cartItems, totalCartItemsCount, totalOrderPrice, resetCartItem } = useProductContext();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onClickHandler = () => {
      resetCartItem();
      setOpen(false);
    }

  return (
  <>
    <div className='flex-1 bg-[#fff] h-fit p-4 rounded-md'>
      <h2 className='font-bold text-xl text-red'>Your Cart ({totalCartItemsCount})</h2>
      {cartItems.length ? (
        <div>
          <div className='divide-y divide-rose-100'>
        {cartItems.map((item, idx) => (
            <CartItem key={idx} cartItem={item}/>
        ))}
      </div>
      <div className='flex justify-between mt-3'>
        <p className='text-rose-500 text-sm'>Order Total</p>
        <p className='font-bold text-rose-900'>${totalOrderPrice.toFixed(2)}</p>
      </div>
      <div className='flex justify-center p-2 mt-3 bg-rose-50 rounded-md'>
        <Image src={"/assets/images/icon-carbon-neutral.svg"} alt='img' width={20} height={10}/>
        <p className='text-sm'>This is a <span className='font-medium text-rose-900'>carbon-neutral</span> delivery.</p>
      </div>
      <button className='w-full mt-3 bg-red rounded-[20px] py-2 text-[#fff] hover:bg-green' onClick={() => setOpen(true)}>Confirm Order</button>
        </div>
      ) : (
      <div className='p-4  flex flex-col gap-4 justify-center items-center'>
        <Image src={'/assets/images/illustration-empty-cart.svg'} alt='img' width={80} height={80}/>
        <p className='text-rose-500 text-sm'>Your added item will appear here</p>
      </div>
      )}
    </div>

    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} closeOnOverlayClick={false} classNames={{
      modal: "rounded-md"
    }}>
      <Image src={"/assets/images/icon-order-confirmed.svg"} alt='img' width={24} height={24}/>
      <p className='text-2x font-bold text-rose-900 mt-3'>Order Confirmed</p>
      <p className='mt-1 text-rose-500 text-sm'>We hope you enjoy your food! <span className='font-bold text-rose-900'>Bushaga loves you!</span></p>
      <div className='bg-rose-50 rounded-md mt-4 p-4'>
       <div className='divide-y divide-rose-100 flex flex-col gap-4 overflow-y-auto'>
       {cartItems.map((item, index) => (
          <div key={index} className='flex justify-between items-center gap-16 pt-2'>
            <div className='flex gap-2 items-center'>
              <div>
                <Image src={item.image.thumbnail} alt='img' width={60} height={60}/>
              </div>
              <div>
                <p className='font-bold text-rose-900'>{item.name}</p>
                <p>
                  <span className='text-red font-medium'>{item.quantity}x</span>
                  <span className='text-sm text-rose-300'> @${item.price}</span>
                </p>
              </div>
            </div>
            <div>
              <span className='font-bold text-sm text-rose-900'>${(item.quantity *  item.price).toFixed(2)}</span>
            </div>
          </div>
        ))}
       </div>
        <div className='flex justify-between mt-4'>
          <p className='text-rose-500'>Order Total</p>
          <p className='font-bold text-rose-900'>${totalOrderPrice.toFixed(2)}</p>
        </div>
      </div>
      <button className='w-full mt-3 bg-red rounded-[20px] py-2 text-[#fff] hover:bg-green' onClick={onClickHandler}>Sart New Order</button>
      </Modal>
  </>
  )
}

export default CartItems
