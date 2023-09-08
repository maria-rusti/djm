import { TextFieldProps } from '@mui/material';
import { Width } from '../../../../utils/types/style';

type ValueSelectSG = string | number;

type OptionSelectSG = {
	value: ValueSelectSG;
	label?: string;
};

type OptionsSelectPropSG = OptionSelectSG[];

interface SelectPropsSG<T extends ValueSelectSG | ValueSelectSG[]>
	extends Omit<TextFieldProps, 'select' | 'onSelect' | 'onChange' | 'value' | 'variant'> {
	options: OptionsSelectPropSG;
	multiple?: boolean;
	selected: T;
	onSelect: (selected: OptionSelectSG) => void;
	width?: Width;
}

export type { ValueSelectSG, OptionSelectSG, OptionsSelectPropSG, SelectPropsSG };
