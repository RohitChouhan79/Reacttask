import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (!productName || !price) return;
    const product = { productName, price };
    onAddProduct(product);
    setProductName('');
    setPrice('');
  };

  return (
    <div >
      <input className="outline-none border-none w-370 px-4 py-3 rounded bg-gray-100 my-1 text-sm text-black mr-5" type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input className="outline-none border-none w-370 px-4 py-3 rounded bg-gray-100 my-1 text-sm text-black mr-5" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button className="border-none outline-none px-4 py-3 bg-green-600 rounded-full font-bold text-sm cursor-pointer text-white w-48 text-center mb-4" onClick={handleAddProduct}>Add product</button>
    </div>
  );
};

export default AddProductForm;
