import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios/index';
import { decryptData } from '../../../utils/functions/decript/index';
import { IReview } from '.';

async function fetchReviews(): Promise<IReview[] | string> {
	try {
		const res =  await requestGuests.get('reviews');
		const data = decryptData(res);
		return data.reviews;
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get reviews.');
	}
}

export { fetchReviews };
