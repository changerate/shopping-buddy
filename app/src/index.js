import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header_comps/Header';
import Footer from './components/footer_comps/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Home() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};

root.render(<Home />);
reportWebVitals();
