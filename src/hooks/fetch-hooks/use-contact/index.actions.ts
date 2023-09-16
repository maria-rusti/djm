import { AxiosError } from 'axios';
import { request } from '../../../utils/config/axios';
import { encryptData } from '../../../utils/functions/decript';

export interface IContact {
    name: string,
	email: string;
	content: string,
	phone: string
}

async function contact(params: IContact): Promise<{ message: string }> {
	try {
	
		const sendData = encryptData(params);
		const res = await request.post('/contact', sendData);
		return { message: res?.data?.message || 'Message successfully send!' };
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to send message.');
	}
}

export {contact};