import { Resolver, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgress, FormControl, ListSubheader, MenuItem, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewsletterFormWrapper, NewsletterButton } from './index.styled';
import useReview from '../../../../../hooks/fetch-hooks/use-review';
import { FormInputSG } from '../../../../../components/common/input';
import { useWindowSize } from '../../../../../hooks/use-window-size';

const schema = yup
	.object({
		name: yup.string().required('Name must be entered!'),
		content: yup
			.string()
			.required('Please provide a message!')
			.min(3, 'Message must be at least 3 characters long!'),
	})
	.required();

export interface IValueReview {
	name: string;
	content: string;
	services: string[];
}
// dj = 'Deejay',
// fresh360 = 'Fresh360',
// lights = 'Lights',
// bar = 'Cocktail Bar',

interface SendButtonProps {
	loadingSubscribe: boolean;
	inside?: boolean;
	isValid: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ isValid, loadingSubscribe, inside }): JSX.Element => (
	<NewsletterButton type='submit' disabled={!isValid} variant={inside ? 'contained' : 'outlined'} inside={!!inside}>
		{loadingSubscribe ? (
			<CircularProgress size='24px' />
		) : (
			<>
				Send <Icon icon='material-symbols:double-arrow' width={30} />
			</>
		)}
	</NewsletterButton>
);

const NewsletterForm: React.FC = (): JSX.Element => {
	const { addReview, loadingAdd } = useReview();
	const { width } = useWindowSize();

	const [value, setValue] = useState<string[]>([]);

	const {
		handleSubmit,
		control,
		formState: { isValid },
		reset,
	} = useForm<IValueReview>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		resolver: yupResolver(schema) as unknown as Resolver<IValueReview>,
	});
	const widthCurrent = width > 600;

	const submitAction = (values: IValueReview): void => {
		const sendData = { ...values, services: value };
		addReview(sendData);
		setValue([]);
		reset();
	};

	return (
		<NewsletterFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<FormInputSG aria-label='name' name='name' control={control} width={widthCurrent ? '50%' : '100%'} />
			<FormControl sx={{ width: widthCurrent ? '50%' : '100%' }}>
				<TextField
					sx={{
						background: '#fff',
						borderTopLeftRadius: '32px 32px',
						borderBottomLeftRadius: '32px 32px',
						borderTopRightRadius: '32px 32px',
						borderBottomRightRadius: '32px 32px',
						width: '100%',
					}}
					id='outlined-select-currency'
					select
					label='Alege un serviciu'
					value={value}
					SelectProps={{ multiple: true }}
					onChange={(e): void => setValue(e.target.value as unknown as string[])}
				>
					<ListSubheader>Serviciul oferit</ListSubheader>
					{['Deejay', 'Fresh360', 'Lights', 'Cocktail Bar']?.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
			<FormInputSG
				type='text'
				aria-label='content'
				name='content'
				control={control}
				width={widthCurrent ? '50%' : '100%'}
			/>

			<SendButton isValid={isValid && !!value} loadingSubscribe={loadingAdd} />
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;
