import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgress, FormControl, ListSubheader, MenuItem, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { StyledNewsletterInput, NewsletterFormWrapper, NewsletterButton } from './index.styled';

export interface IValueReview {
	service: string;
	name: string;
	review: string;
}

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
	const [value, setValue] = useState<string>('');
	const { handleSubmit, register, reset } = useForm<IValueReview>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const submitAction = (values: IValueReview): void => {
		const sendData = { ...values, service: '' };
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
					onChange={(e): void => setValue(e.target.value as unknown as string)}
				>
					<ListSubheader>Select Service</ListSubheader>
					{['dj', 'Fresh360', 'lights']?.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
			<StyledNewsletterInput placeholder='Review' {...register('review')} />
			<SendButton loadingSubscribe={false} />
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;
