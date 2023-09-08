import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import your CSS file

function Checkout({ cartItems, setCartItems, handleEditQuantity,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveItem }) {
    const navigate = useNavigate();

    // Define handleIncrementQuantity, handleDecrementQuantity, handleRemoveItem functions here

    // Function to navigate to the separate checkout page
    const goToCheckoutPage = () => {
        navigate('/checkoutpage'); // Replace with the actual path to your CheckoutPage component
    };

     // Calculate total price
     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Ready to Checkout?</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                        <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                        <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.title} - Quantity:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleEditQuantity(item.id, parseInt(e.target.value))}
                        />
                        - Price: ${item.price * item.quantity}
                        <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                        <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={goToCheckoutPage}>Go to Checkout Page</button>
        </div>
    );
}

export default Checkout;


