import axios, { AxiosInstance } from 'axios';
import config from '../../../env.config';

const request: AxiosInstance = axios.create({
	baseURL: config.api.url,
	withCredentials: true,
});

const requestGuests: AxiosInstance = axios.create({
	baseURL: config.api.urlGuests,
	headers: {
		contentType: 'application/json',
	},
	withCredentials: true,
});


export { request, requestGuests };
