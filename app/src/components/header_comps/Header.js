import React from "react";
import ItemsSection from "./items_section";
import BudgetSection from "./budget_section";

function Header() {
    return (
        <div className="header">
            <div className="header-items-section">
                <p>Items</p>
                <div></div>
                <p style={{ color: "transparent" }}>blank</p>
            </div>
            <div className="header-budget-section">
                <p>$137.34</p>
                <div></div>
                <p>Budget Left: $64.66</p>
            </div>
        </div>
    );
};

export default Header;