import React, { useState } from 'react'
import AddProductForm from './AddProductForm';
import SearchBar from './SearchBar';
import ProductList from './ProductList';


export const Homepage = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    const existingProduct = products.find((p) => p.productName === product.productName);
    if (existingProduct) {
      alert('Product already exists!');
      return;
    }
    setProducts([...products, product]);
  };

  const handleSearch = (searchQuery) => {
    
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

	return (
		<div className='flex h-full bg-red-300 flex-col items-center gap-20' >
			<nav className="w-full h-16 bg-green-600 flex items-center justify-between">
				<h1 className="text-white text-lg ml-5">Reacttask</h1>
				<button className="border-none outline-none px-4 py-3 bg-white rounded-full font-bold text-sm cursor-pointer mr-5" onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <div>
      <h1 className=' mt-10 text-center text-4xl mb-10'>Home Page</h1>
      <div className=' flex flex-col mt-10 gap-10'>
      <AddProductForm onAddProduct={handleAddProduct} />
      <SearchBar onSearch={handleSearch} />
      <hr classname="border-2 border-green-800 my-4"></hr>
      <ProductList  products={products} />
      </div>
    </div>

		</div>
	);
}
