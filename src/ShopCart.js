import React, { useState } from 'react';

function ShopCart({ cartItems, setCartItems }) {
    const [showMessage, setShowMessage] = useState(true);
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);

    // ...

    const handleProceedToCheckout = () => {
        // Other logic...
        setShowMessage(false); // Hide the message when proceeding to checkout
        setShowCheckoutButton(false); // Hide the "Proceed to Checkout" button
    };

    return (
        <div>
            {showMessage && (
                <h2>Your Shopping Cart is Ready!</h2>
            )}
            {showMessage && showCheckoutButton && (
                <div>Click the Proceed to Checkout to view or change your cart.</div>
            )}
            {showCheckoutButton && (
                <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            )}
        </div>
    );
}

export default ShopCart;

;
