import React, { useState } from "react";
import UnpickedProduct from './unpicked_product';

function WhatToGetList({ whatToGetList, addToPickedList }) {
    return (
        <div className='what-to-get-list'>
            <h2>What's left</h2>
            {Array.from(whatToGetList).map((product, index) => (
                < UnpickedProduct
                    index = { index }
                    productName = { product.name }
                    productPrice = { product.price }
                />
            ))}
        </div>
    );
};

export default WhatToGetList;