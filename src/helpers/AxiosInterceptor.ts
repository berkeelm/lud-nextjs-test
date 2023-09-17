
import axios from "axios";
import ExpireStorage from "./ExpireStorage";
import { Helpers } from "./Helpers";

const AxiosInterceptor = () => {
    axios.interceptors.request.use(async function (config: any) {
        var token = await ExpireStorage.getItem(Helpers.getStorageKeys()[1]);
        var language = localStorage.getItem('selected_language');

        if (token)
            config = {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: 'Bearer ' + token,

                }
            }

        config = {
            ...config,
            headers: {
                ...config.headers,
                "Accept-Language": language ? language : 'tr'
            }
        }

        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
}

export default AxiosInterceptor;