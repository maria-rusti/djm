import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios';
import { decryptData } from '../../../utils/functions/decript';
import { IServiceResponse } from './index.interfaces';

async function getServicesAll(): Promise<IServiceResponse[] | string> {
	try {
		const res = await requestGuests.get('services');
		const decryptedData = decryptData(res);
		const data = decryptedData as { services: IServiceResponse[] };
		return data?.services || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get services.');
	};
};

export { getServicesAll };