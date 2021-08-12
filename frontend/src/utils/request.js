class FailResponse {
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }

    isNotConnectServer() {
        return this.status === 404;
    }
}

const getHeaders = () => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append("Authorization", localStorage.getItem('token'));
    return headers;
}

const checkStatus = (status) => {
    const accessStatus = [200];
    return accessStatus.includes(status);
}

const getForm = params => {
    let formData = new FormData();
    Object.keys(params).forEach(key => formData.append(key, params[key]));
    return formData;
}

const getFormXwww = params => {
    let formData = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formData.push(encodedKey + "=" + encodedValue);
    }
    return formData.join("&");
}

export const buildQueryParams = params => {
    const stringParams = Object.keys(params).filter(key => {
        const value = params[key];
        if ((typeof value === 'object') && (value.length === 0)) {
            return false;
        }
        return Boolean(value) || value === 0;
    }).map(key => `${key}=${params[key]}`).join('&');
    return stringParams.length !== 0 ? `?${stringParams}` : '';
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

import axios from 'axios';

export function request(path, params, onUploadProgress) {
    const url = path.search('http') !== -1 ? path : `${API_URL}${path}`;

    const timeout = 60 * 10 * 1000;

    const CancelToken = axios.CancelToken.source();

    const config = {
        headers: {
            'Content-type': 'application/json'
        },
        cancelToken: CancelToken.token,
        timeout: timeout,
        withCredentials: true,
        onUploadProgress: function(progressEvent) {
            if (onUploadProgress) {
                onUploadProgress(Math.round( (progressEvent.loaded * 100) / progressEvent.total ));
            }
        }
    }

    axios.defaults.timeout = timeout;
    axios.defaults.baseURL = API_URL;

    return {
        async post(_config) {
            try {

                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

                let query = '';

                if (_config && _config.query) {
                    query = buildQueryParams(_config.query);
                }

                const response = await axios.post(`${url}${query}`, JSON.stringify(params), config);

                return response.data;

            } catch (e) {
                console.log(e);

                throw new FailResponse(e.response.status, e.response.data);
            }
        },
        async delete() {
            try {
                let query = '';

                if (params) {
                    query = buildQueryParams(params)
                }

                const resp = await axios.delete(`${url}${query}`, config);

                return resp;
            } catch (e) {
                throw new FailResponse(e.response.status, e.response.data);
            }
        },
        async get() {
            try {
                let query = '';

                if (params) {
                    query = buildQueryParams(params)
                }

                const {data} = await axios.get(`${url}${query}`, config);

                return data;
            } catch (e) {
                throw new FailResponse(e.response.status, e.response.data);
            }
        },
        async put() {
            try {
                const {data} = await axios.put(`${url}`, JSON.stringify(params), config);

                return data;
            } catch (e) {
                throw new FailResponse(e.response.status, e.response.data);
            }
        },
        async patch() {
            try {
                const {data} = await axios.patch(`${url}`, JSON.stringify(params), config);

                return data;
            } catch (e) {
                throw new FailResponse(e.response.status, e.response.data);
            }
        }
    }
}
