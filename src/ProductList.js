import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import my CSS file

function ProductList({ addToCart, user }) { // Ensure the addToCart prop is received
    const [products, setProducts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortingOption, setSortingOption] = useState('');

  

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
            console.log('Fetched data:', data); // Log the fetched data
            setProducts(data);
        })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // For smooth scrolling animation
        });
      }
      

    return (
        <div>
            <h1>Product List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchKeyword}
                    onChange={e => setSearchKeyword(e.target.value)}
                />
            </div>
            <div>
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
            <div>
                <select value={sortingOption} onChange={e => setSortingOption(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            <div>
  
    </div>
            <ul>
                {products
                    .filter(product =>
                        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
                    )
                    .filter(product =>
                        selectedCategory === 'all' || product.category === selectedCategory
                    )
                    .sort((a, b) => {
                        if (sortingOption === 'asc') {
                            return a.price - b.price;
                        } else if (sortingOption === 'desc') {
                            return b.price - a.price;
                        } else {
                            return 0;
                        }
                    })
                    .map(product => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            {user ? (
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            ) : (
                                <p>Please log in to add to cart.</p>
                            )}
                            <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
                        </li>
                    ))}
            </ul>
             {/* "Top" button */}
      <div className="top-button-container">
        <button onClick={scrollToTop}>Top</button>
      </div>
        </div>
    );
}

export default ProductList;
