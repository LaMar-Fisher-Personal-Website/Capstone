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

    return (
        <div>
            <h2>Checkout Not Available</h2>
            <ul>
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
            <button onClick={goToCheckoutPage}>Go to Checkout Page</button>
            {/* Additional input fields for shipping and payment info */}
            {/* "Confirm Purchase" button */}
        </div>
    );
}

export default Checkout;


