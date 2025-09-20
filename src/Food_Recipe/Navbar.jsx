import React, { useState } from 'react'

const Navbar = ({ setMealData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
    const data = await api.json();
    // console.log("search results:",data.meals);
    setMealData(data.meals || []);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <h1 className='brand-title'>
          🍽️ <span className='brand-highlight'>Meals</span> Hub
        </h1>
        <p className='brand-subtitle'>Discover flavors from around the world</p>
      </div>
      
      <div className='navbar-center'>
        <form onSubmit={handleSearch} className='search-form'>
          <div className='search-container'>
            <input 
              type="text" 
              placeholder='Search delicious meals...' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='search-input'
            />
            <button type="submit" className='search-btn'>
              🔍
            </button>
          </div>
        </form>
      </div>

      <div className='navbar-actions'>
        <button className='nav-btn'>
          <span className='nav-icon'>🏠</span>
          Home
        </button>
        <button className='nav-btn'>
          <span className='nav-icon'>❤️</span>
          Favorites
        </button>
      </div>
    </nav>
  )
}

export default Navbar
