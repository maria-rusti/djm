import { useCallback, useEffect, useState } from 'react';
import { stateSetter } from '../../../utils/types/state';
import { useLoaders } from '../../use-loaders';
import { IPackage } from './index.interfaces';
import { getPackagesAll } from './index.actions';

export interface PackagesReturnType<T extends IPackage[]> {
	getPackages: () => void;
	data: T;
	setData: stateSetter<T>;
	loadingPackage: boolean;
}

function usePackages<T extends IPackage[], V = IPackage[]>(
	setter: stateSetter<V> | undefined = undefined,
	getPackagesOnRender: boolean | undefined = undefined,
): PackagesReturnType<T> {
	const [data, setData] = useState<T | null>(null);
	const [[loadingPackage], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadGet = useCallback((val: boolean | undefined = undefined) => toggleLoading(0, val), [toggleLoading]);

	const getPackages = useCallback(
		async () => {
			try {
				toggleLoadGet(true);
				const response = await getPackagesAll();
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
		if (getPackagesOnRender) {
			getPackages();
		}
		// eslint-disable-next-line
	}, [getPackagesOnRender]);

	return {
		data: data || ([] as IPackage[] as T),
		setData: setData as stateSetter<T>,
		getPackages,
		loadingPackage,
	};
}

export default usePackages;
