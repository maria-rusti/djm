import { AxiosError } from 'axios';
import { request } from '../../../utils/config/axios/index';
import { decryptData, encryptData } from '../../../utils/functions/decript/index';
import { IReview } from '.';
import { IValueReview } from '../../../views/guest/landing/newsletter-section/newsletter-form';

async function fetchReviews(): Promise<IReview[] | string> {
	try {
		const res = await request.get('reviews');
		const data = decryptData(res);
		return data.reviews;
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to get reviews.');
	}
}
async function postReview(params: IValueReview): Promise<{ message: string }> {
	console.log(params);
	try {
		const encData = encryptData(params);
		const res = await request.post('reviews', encData);
		return { message: res?.data || 'Review sent successfully' };
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Review to post partnership');
	}
}

export { fetchReviews, postReview };
