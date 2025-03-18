import React, { useState } from 'react';

function AddProductPopup({collectProductObject}) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    // Handle change in textarea
    const handleNameChange = (event) => {
        setProductName(event.target.value);
    };

    // Handle change in number input
    const handlePriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent default form submission
        collectProductObject({ name: productName, price: productPrice });  // Call the function with user input
        setProductName('');  // Clear input after submission
        setProductPrice('');  // Clear input after submission
    }

    return (
        <div className='add-product-popup'>
            <h2>Add Product To App</h2>
            <textarea
                placeholder='Enter the full title'
                value={productName}
                onChange={handleNameChange}>
            </textarea>
            <input
                type='number'
                placeholder='$00.00'
                value={productPrice}
                onChange={handlePriceChange}>
            </input>
            <button
                type='submit'
                onClick={handleSubmit}>
                Add Product
            </button>
        </div >
    );
};

export default AddProductPopup;