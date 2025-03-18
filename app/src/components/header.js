import React from "react";

function Header({numItems}) {
    return (
        <div className="header">
            <div className="header-items-section">
                <p>{numItems} Items</p>
                <div></div>
                <p style={{ color: "transparent" }}>blank</p>
            </div>
            <div className="header-budget-section">
                <p>$137.34</p>
                <div></div>
                <p>Budget Left: $62.66</p>
            </div>
        </div>
    );
};

export default Header;