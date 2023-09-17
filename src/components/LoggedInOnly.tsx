import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import bg404 from '../assets/images/bg/404.png'
interface Props {
    children: any
}

const LoggedInOnly = ({ children }: Props) => {
    const auth = useSelector((state: RootState) => state.auth)

    return (
        <React.Fragment>
            {
                auth.user.user
                    ?
                    (
                        <React.Fragment>
                            {children}
                        </React.Fragment>
                    )
                    :
                    (
                        <React.Fragment>
                            <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={bg404.src} />
                            </div>
                        </React.Fragment>
                    )
            }
        </React.Fragment>
    )
}

export default LoggedInOnly;