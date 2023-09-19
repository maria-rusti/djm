import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgress, FormControl, InputLabel, ListSubheader, MenuItem, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { NewsletterFormWrapper, NewsletterButton } from './index.styled';
import useReview from '../../../../../hooks/fetch-hooks/use-review';
import { FormInputSG } from '../../../../../components/common/input';
import { useWindowSize } from '../../../../../hooks/use-window-size';

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
	const { width } = useWindowSize();

	const [value, setValue] = useState<string[]>([]);

	const { handleSubmit, control, reset } = useForm<IValueReview>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});
	const widthCurrent = width > 600;

	const submitAction = (values: IValueReview): void => {
		const sendData = { ...values, services: value };
		addReview(sendData);
		setValue([]);
		console.log(sendData);
		reset();
	};

	return (
		<NewsletterFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<InputLabel id='name'>Name</InputLabel>

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
			<InputLabel id='content'>Content</InputLabel>
			<FormInputSG
				type='text'
				aria-label='content'
				name='content'
				control={control}
				width={widthCurrent ? '50%' : '100%'}
			/>
			<SendButton loadingSubscribe={loadingAdd} />
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;
