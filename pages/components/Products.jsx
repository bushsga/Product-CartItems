import React from 'react';
import { useProductContext } from '../../lib/product-context';
import Product from './Product';

const Products = () => {
  const { products } = useProductContext()

  return (
    <div className='col-span-3 container'>
      <h1 className='font-bold text-2xl'>Dessert</h1>
      <div className='mt-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>{products.length ?  (
        products.map((product, idx) => <Product key={idx} product={product} />)
      ) : (
        <p>No product to display</p>
      )}</div>
    </div>
  )
}

export default Products
