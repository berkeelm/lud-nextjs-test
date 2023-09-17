import React from 'react';
import Footer from '../components/footer/Footer';
import MobileMenu from '../components/navbar/MobileMenu';
import NavBar from '../components/navbar/Navbar';

interface Props {
    children: any
}

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <MobileMenu />
            <NavBar />
            {children}
            <Footer />
            <div id="thetop"></div>
            <div id="backtotop">
                <a href="#" id="scroll">
                    <i className="las la-chevron-up"></i>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Layout;