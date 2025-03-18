import React, { useState } from 'react';
import AddProductPopup from './add-product-popup';

function Footer({ setWhatToGetList, setAddProductPopupVisibility, addProductPopupVisibility}) {
    return (
        <div className='footer'>
            <button type="button" className='archived-receipts-button'></button>
            <button type="button" className='save-receipt-button' title='Save Receipt'>
                Save Receipt
            </button>
            <button
                type="button"
                className='add-product-button'
                onClick={() => setAddProductPopupVisibility(!addProductPopupVisibility)}>
            </button>
        </div>
    );
};

export default Footer;