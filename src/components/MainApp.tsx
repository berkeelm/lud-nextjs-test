import Loader from "@/components/Loader";
import LoadingScreen from "@/components/LoadingScreen";
import AxiosInterceptor from "@/helpers/AxiosInterceptor";
import ExpireStorage from "@/helpers/ExpireStorage";
import { Helpers } from "@/helpers/Helpers";
import { storeActivityIndicator, storeUser, UserModel } from "@/redux/reducers/authSlice";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

interface Props {
    MainProp: any
}

const MainApp = ({ MainProp }: Props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        AxiosInterceptor()
        reCreateAuth()
    }, [])

    const reCreateAuth = async () => {
        var userStr = await ExpireStorage.getItem(Helpers.getStorageKeys()[0]);

        if (userStr) {
            var user: UserModel = JSON.parse(userStr);

            setTimeout(() => { dispatch(storeUser({ isLoading: false, user: user })) }, 2000)
            return;
        }

        setTimeout(() => { dispatch(storeUser({ isLoading: false, user: undefined })) }, 2000)
    }

    return (
        <React.Fragment>

            {/* {
                auth.user.isLoading
                    ?
                    (
                        <LoadingScreen />
                    )
                    :
                    (
                        <MainProp />
                    )
            } */}
            <MainProp />

            {
                (auth.activityIndicator || auth.user.isLoading) && (
                    <Loader isAllFilled={auth.user.isLoading} />
                )
            }
        </React.Fragment>
    )
}

export default MainApp;