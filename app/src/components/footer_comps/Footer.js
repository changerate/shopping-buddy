import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <button type="button" className='archived-receipts-button'></button>
            <button type="button" className='save-receipt-button' title='Save Receipt'>
                Save Receipt
            </button>
            <button type="button" className='add-product-button'></button>
        </div>
    );
};

export default Footer;