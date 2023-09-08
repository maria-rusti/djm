import { AxiosError } from 'axios';
import { IPartnership } from '.';
import { requestGuests } from '../../../utils/config/axios';
import { encryptData } from '../../../utils/functions/decript';

async function addPartnership(params: IPartnership): Promise<{ message: string }> {
	try {
		const {  message, groupMembers, groupLink, groupNiche } = params;
		const data = {
			...params,
			message: message || undefined,
			groupMembers: groupMembers || undefined,
			groupLink: groupLink || undefined,
			groupNiche: groupNiche || undefined,
		};
		const encData = encryptData(data);
		const res = await requestGuests.post('partnership', encData);
		return { message: res?.data || 'Partnership sent successfully' };
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to post partnership');
	}
}

export { addPartnership };
