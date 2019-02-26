import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div>
        <nav className="Navigation">
            <div className="Navigation__Container">
                <img src="../../css/images/logo.png" alt="logo" className="Navigation__Logo"/>
                <ul className="Navigation__List">
                    <li className="Navigation__List__Item">Home</li>
                    <li className="Navigation__List__Item">About us</li>
                    <li className="Navigation__List__Item">LifeStyle</li>
                    <li className="Navigation__List__Item">Portfolio</li>
                    <li className="Navigation__List__Item">Blog</li>
                    <li className="Navigation__List__Item">Elements</li>
                    <li className="Navigation__List__Item">Contacts</li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navigation;