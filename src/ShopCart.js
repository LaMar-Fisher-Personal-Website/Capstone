import React from 'react';

function ShopCart({ cartItems, setCartItems }) {
    // ...

    const handleIncrementQuantity = (itemId) => {
        // Find the item in the cart and increment its quantity
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    const handleDecrementQuantity = (itemId) => {
        // Find the item in the cart and decrement its quantity
        const updatedCart = cartItems.map(item =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemoveItem = (itemId) => {
        // Remove the item from the cart
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };;

      // Calculate total price
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                        {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                        <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                        <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
}


export default ShopCart;
