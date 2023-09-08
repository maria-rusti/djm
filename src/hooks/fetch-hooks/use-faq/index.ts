import { useCallback, useEffect, useState } from 'react';
import { stateSetter } from '../../../utils/types/state';
import { useLoaders } from '../../use-loaders';
import { IFaq } from './index.interfaces';
import { getFaqAll } from './index.actions';

export interface FaqReturnType<T extends IFaq | IFaq[]> {
	getFaq: (platform?: string, search?: string) => void;
	data: T;
	setData: stateSetter<T>;
	loadingFaq: boolean;
}

function useFaq<T extends IFaq | IFaq[], V = IFaq[]>(
	setter: stateSetter<V> | undefined = undefined,
	getFaqOnRender: boolean | undefined = undefined,
): FaqReturnType<T> {
	const [data, setData] = useState<T | null>(null);
	const [[loadingFaq], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadGet = useCallback((val: boolean | undefined = undefined) => toggleLoading(0, val), [toggleLoading]);

	const getFaq = useCallback(
		async (platform?: string, search?: string) => {
			try {
				toggleLoadGet(true);
				const response = await getFaqAll(platform, search);
				if (typeof response !== 'string') {
					if (typeof setter === 'function') setter(response as V);
					else setData(response as T);
				}
			} catch (message) {
				console.error(message);
			} finally {
				toggleLoadGet(false);
			}
		},
		// eslint-disable-next-line
		[setData, toggleLoadGet]
	);

	useEffect(() => {
		if (getFaqOnRender) {
			getFaq();
		}
		// eslint-disable-next-line
	}, [getFaqOnRender]);

	return {
		data: data || ([] as IFaq[] as T),
		setData: setData as stateSetter<T>,
		getFaq,
		loadingFaq,
	};
}

export default useFaq;
