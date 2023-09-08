import { AxiosError } from 'axios';
import { IPartner } from './index.interfaces';
import { requestGuests } from '../../../utils/config/axios';
import { decryptData } from '../../../utils/functions/decript';


async function getPartnersAll(): Promise<IPartner[]> {
	try {
		const res = await requestGuests.get('partners');
		const data = decryptData(res) as { partners: IPartner[] };
		return data?.partners || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get partners.');
	}
}

export { getPartnersAll };
