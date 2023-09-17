"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NavItem from "./NavItem";
import { useRouter } from 'next/router'


const NavList = () => {
    const auth = useSelector((state: RootState) => state.auth)
    const router = useRouter()

    const navigate = (_url: string) => {
        router.push(_url);
    }

    return (
        // <nav className="hidden md:flex flex-row justify-center items-center gap-8">
        //   <NavItem label="Docs" onClick={() => router.push("/docs")} />
        //   <NavItem label="FAQ" onClick={() => router.push("/faq")} />
        //   <NavItem label="Blog" />
        //   <CiSearch size={40} className="cursor-pointer" />
        // </nav>
        <ul className="nav navbar-nav ml-auto">
            <NavItem label="Docs" onClick={() => navigate("/docs")} />
            <NavItem label="Changelog" onClick={() => navigate("/changelog")} />
            <NavItem label="Blog" onClick={() => navigate("/blog")} />
            <NavItem label="Donate" onClick={() => navigate("/donate")} />
            {/* <NavItem label="FAQ" /> */}
            {/* <NavItem label="Blog" /> */}

            {
                auth.user.user && (
                    <NavItem label="Dashboard" onClick={() => navigate("/dashboard")} />
                )
            }
            {/* <li className="active"><a href="index.html">Home</a></li>
      <li><a href="contact.html">Contact Us</a></li> */}
        </ul>
    );
};

export default NavList;
