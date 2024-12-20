export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || 'GET';
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        // console.log('endpoint: ', endpoint);
        // console.log('options: ', options);

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
            .then((response) => response.json())
            .then((res) => res.data)
            .catch((err) => console.log(err));
    };

    const get = (url, options = {}) => {
        options = { method: 'GET' };
        return customFetch(url, options);
    };

    const post = (url, options = {}) => {
        console.log('********** P O S T*******************');
        options.method = 'POST';
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        console.log('********** D E L E T E *******************');
        options.method = 'DELETE';
        options.body = options;
        console.log('req: ', url);
        console.log('options: ', options);
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        del,
    };
};
