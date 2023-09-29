import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import ProductList from './ProductList';
import ShopCart from './ShopCart';
import Login from './Login'; // Create a Login component
import Checkout from './Checkout'; // Import the Checkout component
import CartPage from './CartPage'; // New component for shopping cart page
import CheckoutPage from './CheckoutPage'; // New component for checkout page
import LogoutButton from './LogoutButton'; // Lost logout button after fix Login redirect, I hate React.
import OrderConfirmation from './OrderConfirmation'; // Import the OrderConfirmation component
import './style.css';

function App() {
    // State to manage the cart items
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [user, setUser] = useState(null);
    const containerStyle = {
      backgroundColor: '#a2cffe', // Background color of the container
      width: 'calc(100% + 4px)', // 2px wider than the font
      padding: '20px', // Add some padding for spacing
    };
  
    const gradientTextStyle = {
      background: 'linear-gradient(to right, #002800, gold)', // Gradient background
      WebkitBackgroundClip: 'text', // Clip the text to the background
      color: 'transparent', // Make the text transparent
      display: 'inline-block', // Display as inline-block to fit content
      padding: '5px', // Add padding to separate text from edges
    };  

    const h1Style = {
      fontSize: '36px', // Adjust the font size for the h1 element
    };
    
    const divStyle = {
      fontSize: '24px', // Adjust the font size for the div element
    };

    
    



    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Function to add an item to the cart
    const addToCart = (product) => {
        if (user) {
            // Check if the product is already in the cart
            const existingItem = cartItems.find(item => item.id === product.id);
    
            if (existingItem) {
                // If the product is already in the cart, update its quantity
                const updatedCart = cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                setCartItems(updatedCart);
            } else {
                // If the product is not in the cart, add it with quantity 1
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
        } else {
            // Display a message or handle the case when a non-logged-in user tries to add to cart
            alert('To add items to your cart, login.');
        }
    };

    const handleLogin = (fakeToken) => {
        // Here you would perform a login request to the API using the fake token
        // If the login is successful, set the user state
        console.log('Logging in with token:', fakeToken);
        setUser(fakeToken); // For demonstration purposes, setting user directly
        
    };

    const handleLogout = () => {
        // Clear user state and cart data
        console.log('Logging out');
        setUser(null);
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    // Update local storage whenever cartItems change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                {user ? (
                  <LogoutButton onLogout={handleLogout} />
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </nav>

          <Routes>
  <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
  <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} setCartItems={setCartItems} />} />
  <Route path="/login" element={<Login onLogin={handleLogin} navigate={Navigate} />} />
  <Route path="/order-confirmation" element={<OrderConfirmation />} />
  <Route path="/" element={<div>
    <div style={containerStyle}>
      <h1 style={{ ...gradientTextStyle, ...h1Style }}>Welcome to K.I.S.S.E.S</h1>
      <div style={{ ...gradientTextStyle, ...divStyle }}>A Keeping It Simple Stud E-commerce Shopping experience</div>
    </div>
      <ProductList addToCart={addToCart} user={user} /> {/* Pass the user prop */}
      <ShopCart cartItems={cartItems} setCartItems={setCartItems} />
      {showCheckout ? (
        <div>
        <Checkout cartItems={cartItems} setCartItems={setCartItems} />
        <Link to="/cart" className="button-link">Get Shipping Cost</Link>
    </div>
      ) : (
        <button onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
      )}
      {user && <button onClick={handleLogout}>Logout</button>} {/* Only render when the user is logged in */}
    </div>}
  />
</Routes>

            </div>
        </Router>
    );
}

export default App;


