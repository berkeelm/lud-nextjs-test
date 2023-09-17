import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NavItem from "./NavItem";
import { useRouter } from 'next/router'
const AuthMenu = () => {
    const auth = useSelector((state: RootState) => state.auth)
    const router = useRouter()

    const navigate = (_url: string) => {
        router.push(_url);
    }

    return (
        <React.Fragment>
            {
                !auth.user.user && (
                    <ul className="nav navbar-nav navbar-right">
                        <li className="header-btn">
                            <a href="javascript:;" style={{ cursor: "pointer" }} onClick={() => navigate('/register')}><i className="las la-user-plus"></i>Sign Up</a>
                        </li>
                        <li className="header-btn">
                            <a href="javascript:;" style={{ cursor: "pointer" }} onClick={() => navigate('/login')}><i className="las la-user"></i>Login</a>
                        </li>
                    </ul>
                )
            }
        </React.Fragment>
    );
};

export default AuthMenu;
