import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios';
import { decryptData } from '../../../utils/functions/decript';
import { IPackage } from './index.interfaces';

async function getPackagesAll(): Promise<IPackage[]> {
	try {
		const res = await requestGuests.get('packages');
		const data = decryptData(res) as { packages: IPackage[] };
		return data?.packages || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get partners.');
	}
}

export { getPackagesAll };
