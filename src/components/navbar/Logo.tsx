import React from "react";
import logo from '../../assets/images/logo.png'
import { useRouter } from 'next/router'

const Logo = () => {
    const router = useRouter()
    const navigate = (_url: string) => {
        router.push(_url);
    }

    return (
        <a className="navbar-brand" href="javascript:;" onClick={() => { navigate('/') }}>
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
