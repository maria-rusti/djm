import { CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import useSubscribe from '../../../../../hooks/fetch-hooks/use-subscribe';
import { schema } from './index.form';
import { NewsletterButton, StyledNewsletterInput, NewsletterFormWrapper } from './index.styled';

export interface IValuesProps {
	email: string;
};

interface SendButtonProps {
	isValid: boolean,
	loadingSubscribe: boolean,
	inside?: boolean
}

const SendButton: React.FC<SendButtonProps>
	= ({ isValid, loadingSubscribe, inside }): JSX.Element => (
		<NewsletterButton type='submit' variant={inside ? 'contained' : 'outlined'}
			disabled={!isValid} inside={!!inside} >
			{loadingSubscribe ?
				<CircularProgress size='24px' /> :
				<>Send < Icon icon='material-symbols:double-arrow' width={30} /></>}
		</NewsletterButton>
	);

const NewsletterForm: React.FC = (): JSX.Element => {
	const { sendSubscribe, loadingSubscribe } = useSubscribe();

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const {
		formState: { isValid },
		handleSubmit,
		register,
		reset
	} = useForm<IValuesProps>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		resolver: yupResolver(schema) as Resolver<IValuesProps>,
	});

	const submitAction = (values: IValuesProps): void => {
		const sendData = { ...values, categories: ['All'] };
		sendSubscribe(sendData);
		reset();
	};

	return (
		<NewsletterFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<StyledNewsletterInput
				placeholder='example.mail@socialgod.com'
				endAdornment={!isMobile &&
					<SendButton inside isValid={isValid} loadingSubscribe={loadingSubscribe} />
				}
				{...register('email')}
			/>
			{isMobile && (
				<SendButton isValid={isValid} loadingSubscribe={loadingSubscribe} />
			)}
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;