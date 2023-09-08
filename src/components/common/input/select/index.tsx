import { ChangeEvent, FC } from 'react';
import { MenuItem } from '@mui/material';
import { OptionsSelectPropSG, SelectPropsSG, ValueSelectSG } from './index.interfaces';
import { StyledInputSG } from '../index.styled';
import { isArray } from '../../../../utils/functions';

const getKeyFromValueAndIndex = (value: string | number, index: number): string => {
	let key = '';
	if (typeof value === 'string') key = `${value.replaceAll(' ', '-').toLowerCase()}-${index}`;
	else key = `${key}-${index}`;
	return key;
};

function handleChangeSelected<T extends ValueSelectSG | ValueSelectSG[]>(
	e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	options: OptionsSelectPropSG,
	onSelect: SelectPropsSG<T>['onSelect']
): void {
	const valueSelected = options.find((el) => e.target.value === el.value);
	typeof valueSelected !== 'undefined' && onSelect(valueSelected);
}

/**
 *
 * @param selected actual value of the select input - required
 * @param onSelect it passes the (value: option selected) - required
 * @param options the array made by the select options - required
 * @param multiple it allows multiple values select - optional
 * @param width is used for the width of the input - optional
 * By default is 240px
 * @exampleStart
 * <SelectSG
 *		options={locales}
 * 		selected={lang ?? ''}
 * 		onSelect={(v): void => changeLang(v.value as string)}
 * />
 *
 * @exampleEnd
 * @returns a JSX.Element that represent the Card component - reusable component
 */

const SelectSG: FC<SelectPropsSG<ValueSelectSG | ValueSelectSG[]>> = ({
	options,
	selected,
	onSelect,
	multiple,
	label,
	...otherProps
}) => {
	if (multiple && !isArray(selected)) throw new Error('Using multiple value must be an array');
	else if (!multiple && isArray(selected)) throw new Error('Value must be an string or a number');

	return (
		<StyledInputSG
			select
			SelectProps={{ multiple }}
			value={selected}
			label={label}
			onChange={(e): void =>
				(multiple ? handleChangeSelected<ValueSelectSG[]> : handleChangeSelected<ValueSelectSG>)(
					e,
					options,
					onSelect
				)
			}
			{...otherProps}>
			{options.map((el, i) => (
				<MenuItem value={el?.value} key={el.value || getKeyFromValueAndIndex(el?.value, i)}>
					{el.label || el.value}
				</MenuItem>
			))}
		</StyledInputSG>
	);
};

export default SelectSG;
