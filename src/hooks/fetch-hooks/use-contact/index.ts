import { useCallback, useState } from 'react';
import { IContact, contact } from './index.actions';
import { useNotificationsContext } from '../../use-notifications';
import { useLoaders } from '../../use-loaders';

export interface ConctactReturnType {
	sendContact: (params: IContact) => Promise<void>;
	loadingContact: [boolean, boolean];
	notification: string;
}

function useContact(): ConctactReturnType {
	const [loadingContact, toggleLoading] = useLoaders<[boolean, boolean]>(false, false);
	const toggleLoadContact = (val: boolean | undefined = undefined): void => toggleLoading(0, val);
	const { success, error } = useNotificationsContext();

	const [notification, setNotification] = useState<string>('');

	const sendContact = useCallback(

		async (params: IContact) => {
			try {
				toggleLoadContact(true);
				const res = await contact(params);
				if (typeof res !== 'string') {
					success(res?.message);
					setNotification('success');
				}
			} catch (message) {
				console.error(message);
				error('Could not contact');
				setNotification('failure');
			} finally {
				toggleLoadContact(false);
			}
		},
		// eslint-disable-next-line
		[]
	);

	return { sendContact, loadingContact, notification };
}

export default useContact;
