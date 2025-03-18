import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from '../reportWebVitals';
import Header from '../components/header';
import Footer from '../components/footer';
import WhatToGetList from '../components/what-to-get-list';
import AddProductPopup from '../components/add-product-popup';
import UnpickedItem from '../components/unpicked_product';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Home() {
    const [whatToGetList, setWhatToGetList] = useState([]);
    const [numItems, setNumItems] = useState(0);
    const [addProductPopupVisibility, setAddProductPopupVisibility] = useState(true);

    const collectProductObject = (product) => {
        setWhatToGetList(prevSet => new Set(prevSet).add({ name: product.name, price: product.price }));
        { console.log([...whatToGetList]) }
    };
    
    const addToPickedList = (product) => {
        setWhatToGetList(prevSet => new Set(prevSet).delete(product));
        { console.log([...whatToGetList]) }
    }

    return (
        <div>
            <Header numItems={numItems} />
            <WhatToGetList whatToGetList={[...whatToGetList]} addToPickedList={addToPickedList}/>
            {/* <div className='recommended-list'></div>
            <div className='picked-list'></div> */}
            {addProductPopupVisibility && <AddProductPopup collectProductObject={collectProductObject} />}
            <Footer setWhatToGetList={setWhatToGetList} setAddProductPopupVisibility={setAddProductPopupVisibility} addProductPopupVisibility={addProductPopupVisibility} />
        </div>
    );
};

root.render(<Home />);
reportWebVitals();