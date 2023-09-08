import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios';
import { decryptData } from '../../../utils/functions/decript';
import { ISocial } from './index.interfaces';
import { capitalize } from '../../../utils/functions';

async function getSingleSocial(platform: string): Promise<ISocial | string> {
	try {
		const res = await requestGuests.get(`socials?platform=${capitalize(platform)}`);
		const decryptedData = decryptData(res);
		const data = decryptedData as { socials: ISocial };
		return data?.socials || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get socials.');
	};
};

async function getAllSocials(): Promise<ISocial[] | string> {
	try {
		const res = await requestGuests.get('socials');
		const decryptedData = decryptData(res);
		const data = decryptedData as { socials: ISocial[] };
		return data?.socials || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get socials.');
	};
};


export { getSingleSocial, getAllSocials };