import { AxiosError } from 'axios';
import { requestGuests } from '../../../utils/config/axios/index';
import { decryptData, encryptData } from '../../../utils/functions/decript/index';
import { IReview } from '.';
import { IValueReview } from '../../../views/guest/landing/newsletter-section/newsletter-form';

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
async function postReview(params: IValueReview): Promise<{ message: string }> {
	try {
	
		const encData = encryptData(params);
		const res = await requestGuests.post('partnership', encData);
		return { message: res?.data || 'Partnership sent successfully' };
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to post partnership');
	}
}

export { fetchReviews, postReview };
