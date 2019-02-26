import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
        <div className="Header">
            <div className="Header__Container">
                <div className="Header__Left">
                    <ul className="Header__Left__Info">
                        <li className="Header__Left__Info__Item">+84 5858 - 4658</li>
                        <li className="Header__Left__Info__Item">Fat 2 Fit@email.com</li>
                        <li className="Header__Left__Info__Item">123 Jackson, New York</li>
                    </ul>
                </div>
                <div className="Header__Right">
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
