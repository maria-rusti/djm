import { ChangeEvent, FC } from 'react';
import { MenuItem, Theme, capitalize } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
// eslint-disable-next-line import/no-extraneous-dependencies
import isEqual from 'lodash.isequal';
import { Controller } from 'react-hook-form';
import { FakeEvent, FormSelectPropsSG } from './index.interfaces';
import { OptionSelectSG, OptionsSelectPropSG } from '../../select/index.interfaces';
import { StyledInputSG } from '../../index.styled';
import { normalizeCamelCase, uuid } from '../../../../../utils/functions';

const allOption = {
	value: 'all',
	label: 'all',
};

const emptyOption = {
	value: '',
	label: '',
};

const generateMenuItems = (options: OptionsSelectPropSG, allAdded: boolean, isOnlyAll: boolean): JSX.Element[] =>
	(allAdded ? [allOption, ...options] : options).map((option: OptionSelectSG) =>
		isEqual(option, emptyOption) ? (
			<MenuItem key={`empty-option-${uuid()}`} sx={{ display: 'none' }} />
		) : (
			<MenuItem
				disabled={option.value !== allOption.value && isOnlyAll}
				key={`${option.value}${option.value === 'all' ? `-${uuid()}` : ''}`}
				value={option.value}>
				{option.label}
			</MenuItem>
		)
	);
const constructEvent = (val: string[], name: string): FakeEvent => ({ target: { value: val, name } });
const getWorkedEvent = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): FakeEvent => {
	const values = e.target.value as unknown as string[];
	if (values?.includes('all')) return constructEvent(['all'], e.target.name);
	return constructEvent(values, e.target.name);
};
/**
 *
 * @param name: string - required
 * @param control: Control<{your form interface}> - required
 * @param options: { label: string, value: string }[] - required
 * @param multiple: boolean - optional
 * By default it is
 * @param label: string - optional
 * If is undefined will be used the name prop normalized
 * example: confirmPassword -> Confirm password
 * @param autoFocus: boolean - optional
 * By default is false
 * @param includeAll: boolean - optional
 * You can include the 'all' option by only putting this prop
 * It will handle also the selected options if you are clicking it
 * By default is false
 * @param width: Width (string | number) - optional
 * By default is 240px
 *
 * @exampleStart
 * <FormSelectSG
 *      multiple
 *      name='selectValue'
 *      control={control}
 *      options={options.map((el) => ({ value: el, label: el }))}
 *  />;
 *
 * @exampleEnd
 * @returns a JSX.Element that represent the Form Input component - reusable component
 */
const FormSelectSG: FC<FormSelectPropsSG> = ({
	name,
	control,
	label,
	options,
	multiple,
	autoFocus,
	width,
	includeAll,
}) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { onChange, value } }): JSX.Element => (
			<StyledInputSG
				select
				autoFocus={!!autoFocus}
				label={label || capitalize(normalizeCamelCase(name))}
				SelectProps={{ multiple }}
				onChange={(e): void => (includeAll && multiple ? onChange(getWorkedEvent(e)) : onChange(e))}
				value={value}
				sx={({ spacing }): SystemStyleObject<Theme> => ({ width: width || spacing(30) })}>
				{generateMenuItems(
					[...options, emptyOption],
					!!includeAll,
					!!multiple && [...value][0] === 'all' && [...value].length === 1
				)}
			</StyledInputSG>
		)}
	/>
);
export default FormSelectSG;
