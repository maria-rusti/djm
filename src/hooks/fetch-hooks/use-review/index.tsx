import { useCallback, useState, useEffect } from 'react';
import { useLoaders } from '../../use-loaders/index';
import { fetchReviews } from './index.action';

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
	loading: boolean;
	getReviews: () => void;
}

function useReview(): UseReviewReturnType {
	const [data, setData] = useState<IReview[] | null>(null);
	const [[loading], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadGet = useCallback((val: boolean | undefined = undefined) => toggleLoading(0, val), [toggleLoading]);

	
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

	useEffect(() => {
		getReviews();
	}, [getReviews]);

	return {
		data,
		loading,
		getReviews,
	};
}

export default useReview;
