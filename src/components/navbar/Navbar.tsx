
import { useState, useEffect } from "react";
import AuthMenu from "./AuthMenu";
import Logo from "./Logo";
import NavList from "./NavList";

const NavBar = () => {
    const openMenu = () => {
        $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
    }
    // const [top, setTop] = useState(true);

    // useEffect(() => {
    //   const scrollHandler = () => {
    //     window.pageYOffset > 20 ? setTop(false) : setTop(true);
    //   };
    //   window.addEventListener("scroll", scrollHandler);
    //   return () => window.removeEventListener("scroll", scrollHandler);
    // }, [top]);

    return (
        // <header
        //   className={`fixed top-0 w-full z-10 ${
        //     !top ? "shadow-md bg-neutral-50/90" : "bg-transparent"
        //   }`}
        // >
        //   <div className="py-4">
        //     <Container>
        //       <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
        //         <Logo />
        //         <NavList />
        //         <AuthMenu />
        //         <div className="block md:hidden cursor-pointer">
        //           <MobileMenuModal />
        //         </div>
        //       </div>
        //     </Container>
        //   </div>
        // </header>

        <header className="header_area">
            <div className="main_menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Logo />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavList />
                            {/* <ul className="nav navbar-nav ml-auto">
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul> */}
                            <AuthMenu />
                            {/* <ul className="nav navbar-nav navbar-right">
              <li className="header-btn">
                <a href="contact.html"><i className="las la-user-plus"></i>Sign Up</a>
              </li>
              <li className="header-btn">
                <a href="contact.html"><i className="las la-user"></i>Login</a>
              </li>
            </ul> */}
                        </div>
                    </nav>
                </div>
                <div className="right_burger">
                    <ul className="nav">
                        <li>
                            <div onClick={openMenu} className="menu_btn">
                                <img src="img/icon/menu.png" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;