import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios';
import { decryptData } from '../../../utils/functions/decript';
import { IFaq } from './index.interfaces';


async function getFaqAll(platform?: string,search?: string ): Promise<IFaq[]> {
	// eslint-disable-next-line no-nested-ternary
	const requestPath = platform ? `faq?platform=${platform}` : search ? `faq?question=${search}` : 'faq';
	try {
		const res = 
		await requestGuests.get(platform && search ? `faq?platform=${platform}&question=${search}` : requestPath);
		const data = decryptData(res) as { qas: IFaq[] };
		return data?.qas || [];
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get partners.');
	}
}

export { getFaqAll };
