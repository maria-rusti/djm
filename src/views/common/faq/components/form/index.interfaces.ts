import { Dispatch, SetStateAction } from 'react';
import { IServiceResponse } from '../../../../../hooks/fetch-hooks/use-services/index.interfaces';

export interface IFormFaqProps {
	mobileWidth: boolean;
	service: string;
	handleSelectService: (value: string) => void;
	services: IServiceResponse[];
	handleFetchDate: (platform?: string, search?: string) => void;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}