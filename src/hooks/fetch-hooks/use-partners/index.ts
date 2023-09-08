import { useCallback, useEffect, useState } from 'react';
import { getPartnersAll } from './index.actions';
import { stateSetter } from '../../../utils/types/state';
import { useLoaders } from '../../use-loaders';
import { IPartner } from './index.interfaces';

export interface PartnersReturnType<T extends IPartner | IPartner[]> {
	getPartners: () => void;
	data: T;
	setData: stateSetter<T>;
	loadingPartners: boolean;
}

function usePartners<T extends IPartner | IPartner[], V = IPartner[]>(
	setter: stateSetter<V> | undefined = undefined,
	getPartnersOnRender: boolean | undefined = undefined,
): PartnersReturnType<T> {
	const [data, setData] = useState<T | null>(null);
	const [[loadingPartners], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadGet = useCallback((val: boolean | undefined = undefined) => toggleLoading(0, val), [toggleLoading]);

	const getPartners = useCallback(
		async () => {
			try {
				toggleLoadGet(true);
				const response = await getPartnersAll();
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
		if (getPartnersOnRender) {
			getPartners();
		}
		// eslint-disable-next-line
	}, [getPartnersOnRender]);

	return {
		data: data || ([] as IPartner[] as T),
		setData: setData as stateSetter<T>,
		getPartners,
		loadingPartners,
	};
}

export default usePartners;
