import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className=''>
      <h1 className=' text-center text-2xl mb-10'>Product List</h1>
      {products.length === 0 ? (
        <p className=' text-center text-red-600 font-bold mb-24'>No Product Found</p>
      ) : (
        <ul className='flex flex-col w-100'>
          <li className='flex justify-between'>
            <p className=' text-xl mb-3'>Product name</p>
            <p className='text-xl mb-3'> Price</p>
          </li>
          {products.map((product, index) => (
            <li className='flex justify-between mb-5' key={index}>
              <p className='text-lg '>{product.productName}</p>
              <p className='text-lg'>{product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
