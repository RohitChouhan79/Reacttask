import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input className="outline-none border-none w-370 px-4 py-3 rounded bg-gray-100 my-1 text-sm text-black mr-5" type="text" placeholder="Search by product name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className= "border-none outline-none px-4 py-3 bg-white rounded-full font-bold text-sm cursor-pointer w-48" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
