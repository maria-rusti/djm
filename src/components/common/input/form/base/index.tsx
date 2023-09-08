import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';
import { capitalize, normalizeCamelCase } from '../../../../../utils/functions';
import { FormInputPropsSG } from './index.interfaces';
import { StyledInputSG } from '../../index.styled';

/**
 *
 * @param name: string - required
 * @param control: Control<{your form interface}> - required
 * @param label: string - optional
 * If is undefined will be used the name prop normalized
 * example: confirmPassword -> Confirm password
 * @param autoFocus: boolean - optional
 * By default is false
 * @param width: Width (string | number) - optional
 * By default is 240px
 * @exampleStart
 * <FormInputSG name='email' control={control} autoFocus />
 *
 * @exampleEnd
 * @returns a JSX.Element that represent the Form Input component - reusable component
 */

const FormInputSG: FC<FormInputPropsSG> = 
({ name, label, control, autoFocus, width, type, muiInputProps, ...props }) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { name: parsedName, value, onChange, onBlur }, fieldState: { error } }): JSX.Element => (
			<StyledInputSG
				name={parsedName.split(' ').join('-')}
				InputProps={{ ...muiInputProps, id: parsedName.split(' ').join('-') }}
				type={type}
				autoFocus={autoFocus}
				value={value}
				label={label || capitalize(normalizeCamelCase(parsedName))}
				onChange={onChange}
				onBlur={onBlur}
				helperText={error?.message || ''}
				error={!!error}
				sx={({ spacing }): SystemStyleObject<Theme> => ({ width: width || spacing(30) })}
				{...props}
			/>
		)}
	/>
);

export default FormInputSG;
