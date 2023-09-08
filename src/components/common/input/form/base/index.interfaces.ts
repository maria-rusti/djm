import { InputProps, StandardTextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';
import { Width } from '../../../../../utils/types/style';

interface FormInputPropsSG extends StandardTextFieldProps{
	name: string;
	control: Control<any, any>;
	label?: string;
	autoFocus?: boolean;
	width?: Width;
	hidden?: boolean;
	muiInputProps?: InputProps;
}

export type { FormInputPropsSG };
