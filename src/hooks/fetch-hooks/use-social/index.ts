import { useEffect, useCallback, useState } from 'react';
import { ISocial } from './index.interfaces';
import { stateSetter } from '../../../utils/types/state';
import { useLoaders } from '../../use-loaders';
import { getSingleSocial, getAllSocials } from './index.actions';

export interface ServicesReturnType<T extends ISocial | ISocial[]> {
	getSocial: (platform: string) => void
	getSocials: () => void
	setData: stateSetter<T>
	data: T
	loadingSocials: boolean
}

function useSocials<T extends ISocial | ISocial[], V = ISocial[]>(
	setter: stateSetter<V> | undefined = undefined,
	getSocialsOnRender: boolean | undefined = undefined
): ServicesReturnType<T> {

	const [data, setData] = useState<T | null>(null);
	const [[loadingSocials], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadServices = useCallback((val: boolean | undefined = undefined) =>
		toggleLoading(0, val), [toggleLoading]);

	const getSocial = useCallback(
		async (platform: string) => {
			try {
				toggleLoadServices(true);
				const response = await getSingleSocial(platform);
				if (typeof setter === 'function') {
					setter(response as V);
				} else {
					setData(response as T);
				}
				if (typeof response !== 'string') {
					setData(response as T);
				}
			} catch (message) {
				console.log(message);
			} finally {
				toggleLoadServices(false);
			}
		},
		// eslint-disable-next-line
		[setData]
	);

	const getSocials = useCallback(
		async () => {
			try {
				toggleLoadServices(true);
				const response = await getAllSocials();
				if (typeof setter === 'function') {
					setter(response as V);
				} else {
					setData(response as T);
				}
				if (typeof response !== 'string') {
					setData(response as T);
				}
			} catch (message) {
				console.log(message);
			} finally {
				toggleLoadServices(false);
			}
		},
		// eslint-disable-next-line
		[setData]
	);

	useEffect(() => {
		if (getSocialsOnRender) {
			getSocials();
		}
		// eslint-disable-next-line
	}, [getSocialsOnRender])
	return ({
		data: data || ([] as ISocial[] as T),
		setData: setData as stateSetter<T>,
		getSocial, loadingSocials,
		getSocials
	});
};

export default useSocials;