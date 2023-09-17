"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'


import { RootState } from "@/redux/store";
import { storeUser } from "@/redux/reducers/authSlice";
import { Helpers } from "@/helpers/Helpers";
import ExpireStorage from "@/helpers/ExpireStorage";

const DashboardNavList = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const navigate = (_url: string) => {
        router.push(_url);
    }
    const auth = useSelector((state: RootState) => state.auth);

    const signOut = async () => {
        await ExpireStorage.removeItem(Helpers.getStorageKeys()[0]);
        await ExpireStorage.removeItem(Helpers.getStorageKeys()[1]);

        navigate('/')
        dispatch(storeUser({ isLoading: false, user: undefined }));
    }

    return (
        <div className="changelog-item wow fadeInUp  delay-4s animated p-3">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <a className="bg-white list-group-item list-group-item-action list-group-item-light p-3" href="javascript:;" onClick={() => navigate("/dashboard")}>Account</a>
                    <a className="bg-white list-group-item list-group-item-action list-group-item-light p-3" href="javascript:;" onClick={() => navigate("/dashboard/endpoints")}>Endpoints</a>
                    {/* <a className="bg-white list-group-item list-group-item-action list-group-item-light p-3" href="javascript:;">Empty Menu 2</a> */}
                    <a className="bg-white list-group-item list-group-item-action list-group-item-light p-3" href="javascript:;" onClick={signOut}>Sign Out</a>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavList;
