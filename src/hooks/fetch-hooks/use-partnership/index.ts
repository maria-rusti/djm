import { useCallback } from 'react';
import { useLoaders } from '../../use-loaders';
import { addPartnership } from './index.actions';
import useNotifications from '../../use-notifications';

export interface IPartnership {
	telegramUsername: string;
	hasSocialMediaGroups?: boolean;
	groupMembers?: number;
	groupNiche?: string;
	groupLink?: string;
	message?: string;
}

interface PartnershipReturnType {
	postPartnership: (partnership: IPartnership) => void;
	loading: boolean;
}

function usePartnership(): PartnershipReturnType {
	const [[loading], toggleLoading] = useLoaders<[boolean]>(false);
	const { success, error } = useNotifications();

	const postPartnership = useCallback(
		async (partnership: IPartnership) => {
			try {
				toggleLoading(0);
				const response = await addPartnership(partnership);
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
	return { postPartnership, loading };
}

export default usePartnership;
