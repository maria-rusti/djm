import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgress, FormControl, ListSubheader, MenuItem, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { StyledNewsletterInput, NewsletterFormWrapper, NewsletterButton } from './index.styled';
import useReview from '../../../../../hooks/fetch-hooks/use-review';

export interface IValueReview {
	name: string;
	content: string;
	service: string;
}
// dj = 'Deejay',
// fresh360 = 'Fresh360',
// lights = 'Lights',
// bar = 'Cocktail Bar',

interface SendButtonProps {
	loadingSubscribe: boolean;
	inside?: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ loadingSubscribe, inside }): JSX.Element => (
	<NewsletterButton type='submit' variant={inside ? 'contained' : 'outlined'} inside={!!inside}>
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

	const [value, setValue] = useState<string>('Fresh360');
	const { handleSubmit, register, reset } = useForm<IValueReview>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const submitAction = (values: IValueReview): void => {
		const sendData = { ...values, service: value };
		addReview(sendData);
		console.log(sendData);
		reset();
	};

	return (
		<NewsletterFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<StyledNewsletterInput placeholder='Name' {...register('name')} sx={{ width: '50%' }} />
			<FormControl sx={{ width: '100%' }}>
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
					label='Select Service'
					value={value}
					// SelectProps={{ multiple: true }}
					onChange={(e): void => setValue(e.target.value as unknown as string)}
				>
					<ListSubheader>Select Service</ListSubheader>
					{['Deejay', 'Fresh360', 'Lights', 'Cocktail Bar']?.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
			<StyledNewsletterInput placeholder='Review' {...register('content')} />
			<SendButton loadingSubscribe={loadingAdd} />
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;
