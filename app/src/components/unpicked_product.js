import React, { useState } from "react";

function UnpickedProduct({ index, productName, productPrice, addToPickedList }) {
    return (
        <div className="unpicked-product">
            <div onClick={addToPickedList(product)}></div>
            <p>{productName}</p>
            <p>{productPrice}</p>
        </div>
    );
};

export default UnpickedProduct;