import { useCallback, useState, useEffect } from 'react';
import { useLoaders } from '../../use-loaders/index';
import { fetchReviews, postReview } from './index.action';
import { IValueReview } from '../../../views/guest/landing/newsletter-section/newsletter-form';
import useNotifications from '../../use-notifications';

export interface IReview {
	reviewer: string;
	position: string;
	content: string;
	rating: number;
	_id?: string;
	showOnLandingPage?: boolean;
	hidden?: boolean;
	postedBy?: string;
	createdAt?: string;
	updatedAt?: string;
	avatar?: string;
}

export interface IReviewValueProps {
	reviewer: string;
	rating: string;
	content: string;
}

export interface UseReviewReturnType {
	data: IReview[] | null;
	loadingGet: boolean;
	loadingAdd: boolean;
	getReviews: () => void;
	useAddReview: (values: IValueReview) => void;
}

function useReview(): UseReviewReturnType {
	const [data, setData] = useState<IReview[] | null>(null);
	const [[loadingGet, loadingAdd], toggleLoading] = useLoaders<[boolean, boolean]>(false, false);
	const toggleLoadGet = useCallback((val: boolean | undefined = undefined) => toggleLoading(0, val), [toggleLoading]);
	const { success, error } = useNotifications();

	const getReviews = useCallback(async () => {
		try {
			toggleLoadGet(true);
			const response = await fetchReviews();
			if (typeof response !== 'string') {
				setData(response);
			}
		} catch (e) {
			console.error(e);
		} finally {
			toggleLoadGet(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setData, toggleLoadGet]);

	const useAddReview = useCallback(
		async (partnership: IValueReview) => {
			try {
				toggleLoading(0);
				const response = await postReview(partnership);
				if (typeof response !== 'string') {
					success(response?.message);
				}
			} catch (e) {
				console.error(e);
				error('Could not send partnership');
			} finally {
				toggleLoading(0);
			}
		},
		// eslint-disable-next-line
		[toggleLoading]
	);

	useEffect(() => {
		getReviews();
	}, [getReviews]);

	return {
		data,
		loadingGet,
		loadingAdd,
		getReviews,
		useAddReview,
	};
}

export default useReview;
