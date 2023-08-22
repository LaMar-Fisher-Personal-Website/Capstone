import React, { useState } from 'react';
import ProductList from './ProductList';
import ShopCart from './ShopCart';

function App() {
    // State to manage the cart items
    const [cartItems, setCartItems] = useState([]);

    return (
        <div>
            {/* Render other parts of your app */}
            <ProductList cartItems={cartItems} setCartItems={setCartItems} />
            <ShopCart cartItems={cartItems} />
        </div>
    );
}

export default App;
