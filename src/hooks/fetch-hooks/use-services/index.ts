import { useEffect, useCallback, useState } from 'react';
import { IServiceResponse } from './index.interfaces';
import { stateSetter } from '../../../utils/types/state';
import { useLoaders } from '../../use-loaders';
import { getServicesAll } from './index.actions';


export interface ServicesReturnType<T extends IServiceResponse | IServiceResponse[]> {
	getServices: () => void
	setData: stateSetter<T>
	data: T
	loadingServices: boolean
}

function useServices<T extends IServiceResponse | IServiceResponse[], V = IServiceResponse[]>(
	setter: stateSetter<V> | undefined = undefined,
	getServicesOnRender: boolean | undefined = undefined
): ServicesReturnType<T> {

	const [data, setData] = useState<T | null>(null);
	const [[loadingServices], toggleLoading] = useLoaders<[boolean]>(false);
	const toggleLoadServices = useCallback((val: boolean | undefined = undefined) => 
		toggleLoading(0, val), [toggleLoading]);

	const getServices = useCallback(
		async () => {
			try {
				toggleLoadServices(true);
				const response = await getServicesAll();
				if (typeof setter === 'function' ) {
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
		if (getServicesOnRender) {
			getServices();
		}
		// eslint-disable-next-line
	}, [getServicesOnRender])
	return ({ data: data || ([] as IServiceResponse[] as T), 
		setData: setData as stateSetter<T>, getServices, loadingServices });
};

export default useServices;