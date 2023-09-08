import { CardProps, OutlinedInputProps } from '@mui/material';

export interface IValuesProps {
    search: string
}

export interface CardPlatform extends CardProps {
	selected?: boolean;
}

export interface InputSearchProps extends OutlinedInputProps {
	mobileWidth: boolean;
}