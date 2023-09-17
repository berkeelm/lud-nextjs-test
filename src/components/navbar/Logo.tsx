import React from "react";
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <a className="navbar-brand" href="#" onClick={() => {/*router.push("/")*/ }}>
            <img
                onClick={() => {/*router.push("/")*/ }}
                alt="Logo"
                height={50}
                width={200}
                src={logo.src}
            />
        </a>
    );
};

export default Logo;
