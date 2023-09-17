import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NavItem from "./NavItem";
import { useRouter } from 'next/router'

const MobileMenu = () => {
    const router = useRouter()
    const auth = useSelector((state: RootState) => state.auth)
    const closeMenu = () => {
        $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
    }

    const navigate = (_url: string) => {
        router.push(_url);
    }

    const navigateHome = () => {
        navigate('/');
        closeMenu();
    }

    const navigateDocs = () => {
        navigate('/docs');
        closeMenu();
    }

    const navigateChangelog = () => {
        navigate('/changelog');
        closeMenu();
    }

    const navigateBlog = () => {
        navigate('/blog');
        closeMenu();
    }

    const navigateDonate = () => {
        navigate('/donate');
        closeMenu();
    }

    const navigateDashboard = () => {
        navigate('/dashboard');
        closeMenu();
    }

    const navigateRegister = () => {
        navigate('/register');
        closeMenu();
    }

    const navigateLogin = () => {
        navigate('/login');
        closeMenu();
    }

    return (
        <div className="mobile_canvus_menu">
            <div onClick={closeMenu} className="close_btn">
                <img src="/img/icon/close-dark.png" alt="" />
            </div>
            <div className="menu_part_lux">
                <ul className="menu_list wd_scroll">
                    <NavItem label="Home" onClick={() => navigateHome()} />
                    <NavItem label="Docs" onClick={() => navigateDocs()} />
                    <NavItem label="Changelog" onClick={() => navigateChangelog()} />
                    <NavItem label="Donate" onClick={() => navigateDonate()} />
                    <NavItem label="Blog" onClick={() => navigateBlog()} />
                    {
                        auth.user.user && (
                            <NavItem label="Dashboard" onClick={() => navigateDashboard()} />
                        )
                    }
                </ul>
            </div>
            {
                !auth.user.user && (
                    <div className="menu_btm">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="header-btn">
                                <a href="javascript:;" style={{ cursor: "pointer" }} onClick={() => navigateRegister()}><i className="las la-user-plus"></i>Sign Up</a>
                            </li>
                            <li className="header-btn">
                                <a href="javascript:;" style={{ cursor: "pointer" }} onClick={() => navigateLogin()}><i className="las la-user"></i>Login</a>
                            </li>
                        </ul>
                    </div>
                )
            }
            {/* <div className="menu_btm">
                <a className="ticket-btn" href="contact.html"><i className="las la-ticket-alt"></i> Create a Ticket</a>
            </div> */}
        </div>
    );
};

export default MobileMenu;