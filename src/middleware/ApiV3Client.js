import _ from 'lodash';
import CONFIG from '../../config/';

class ApiV3Client {
    baseUrl;
    userAgent;

    constructor(options) {
        this.baseUrl = CONFIG.API.URL;
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
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        // $FlowFixMe don't care much about this right now
        const response = await fetch(this.baseUrl + (modifiedPath || path), {
            method,
            body,
            headers,
            redirect: 'follow',
            credentials: 'include',
        });

        if (response.status >= 200 && response.status < 300) {
            let value = true;
            try {
                value = response.json();
                return value;
            } catch (e) {
                return true;
            }
        }

        // Handle failed responses
        const error = {};
        error.statusCode = response.status;
        error.response = response;
        throw error;
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
