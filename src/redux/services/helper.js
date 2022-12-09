import axios from "axios";
import moment from "moment-timezone";
import store from "../store";

axios.defaults.params = {};
axios.defaults.params["timezone"] = moment.tz.guess();

const api = function(
    timeout = 20000,
    baseURL,
    headers = {},
) {
    if (!baseURL) {
        baseURL = "http://localhost:5000/api/";
    }

    axios.defaults.params["clientVersion"] = window?.clientBuildVersion;
    const options = {
        baseURL: baseURL,
        timeout: timeout,
        // headers: isAuthenticated()
        //     ? {
        //         Authorization: `Bearer ${
        //             changeToken ? GET_AUTH(changeToken) : GET_AUTH()
        //         }`,
        //         ...headers
        //     }
        //     : {}
    };
    return axios.create(options);
};

export const GET = async (
    url,
    params = {},
    timeout,
    baseUrl
) => {
    if (
        params.hasOwnProperty("timezone") &&
        params["timezone"] &&
        params["timezone"].length
    ) {
        axios.defaults.params["timezone"] = params["timezone"];
    }
    let response;
    try {
        response = await api(timeout, baseUrl, {}).get(url, { params });
    } catch (error) {
        console.error(error);
        if (error?.response?.status === 401) {
            // REMOVE_AUTH();
            window.location.href = window.location.origin + "/login";
        }
        return error && error.response;
    }
    return response;
};


