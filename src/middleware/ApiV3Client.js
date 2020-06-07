import _ from 'lodash';
import {API} from '../config/api';

class ApiV3Client {
    baseUrl;
    userAgent;

    constructor(options) {
        this.baseUrl = API.URL;
        this.userAgent = 'Content';
    }

    async fetch(path, method, data, options) {
        let body;
        let modifiedPath;

        if (method === 'GET') {
            if (data) {
                modifiedPath = `${path}?${data && this.constructQueryString(data)}`;
            } else {
                modifiedPath = path;
            }
        } else if (method === 'POST' || method === 'PUT') {
            body = data ? JSON.stringify(data) : undefined;
        }

        // Construct headers
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        var options = {
            method,
            headers,
            body,
            // mode: 'no-cors',
        };
        // $FlowFixMe don't care much about this right now
        return fetch(this.baseUrl + (modifiedPath || path), options).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    };

    get(path, data, options) {
        return this.fetch(path, 'GET', data, options);
    }

    delete(path, data, options) {
        return this.fetch(path, 'DELETE', data, options);
    }

    post(path, data, options) {
        return this.fetch(path, 'POST', data, options);
    }

    constructQueryString(data) {
        return _.map(data, (v, k) => {
            return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
        }).join('&');
    }
}

export default ApiV3Client;

// In case you don't want to always initiate, just import with `import { client } ...`
export const clientV3 = new ApiV3Client();
