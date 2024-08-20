import React from 'react'
import Image from 'next/image'
import { useProductContext } from '../context/product-context'

const Product = ({ product }) => {
  const {isItemInCart, addItemToCart, getCartItemQty, decrementCartQty, incrementCartQty} = useProductContext();
  return (
    <div>
      <img src={product.image.desktop} alt={product.name} className='rounded-md w-full'/>
      <div className='relative py-6'>
        <div className='w-full absolute -top-5 flex justify-center'>
         {isItemInCart(product.name) ? (
          <div className='w-36 flex justify-between gap-4 py-2 px-4 rounded-[24px] bg-red  font-semibold'>
            <button className='rounded-full border border-[#fff] w-5 h-5 flex justify-center items-center hover:bg-rose-900' onClick={() => decrementCartQty(product.name)}>
            <Image src={"/assets/images/icon-decrement-quantity.svg"} width={8} height={8}/>
            </button>
           <p className='text-[#fff]'>{getCartItemQty(product.name)}</p>
           <button className='rounded-full border border-[#fff] w-5 h-5 flex justify-center items-center hover:bg-rose-900' onClick={() => incrementCartQty(product.name)}>
            <Image src={"/assets/images/icon-increment-quantity.svg"} width={8} height={8}/>
            </button>
          </div>
         ) : (
                  <button className='flex justify-center gap-4 py-2 px-6 rounded-[24px] bg-[#fff] cursor-pointer border border-white font-semibold hover:border hover:text-red hover:border-red' onClick={() => addItemToCart(product)}>
                  <Image src={"/assets/images/icon-add-to-cart.svg"} width={25} height={30}/>
                  <span>Add to Cart</span>
                  </button>
         )}
        </div>
        <p className='text-sm text-rose-300 font-bold'>{product.category}</p>
        <p className='text-regular font-bold text-rose-900 mt-1'>{product.name}</p>
        <p className='font-bold text-red mt-1'>${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Product
