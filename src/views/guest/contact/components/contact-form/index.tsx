import { CircularProgress, Typography, useTheme } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormWrapper, FormContainer } from './index.styled';
import useContact from '../../../../../hooks/fetch-hooks/use-contact';
import { NewsletterButton } from '../../../landing/newsletter-section/newsletter-form/index.styled';
import { FormInputSG } from '../../../../../components/common/input';
import { Flex } from '../../../../../components/common';
import { schema } from './index.form';

export interface IValuesProps {
	name: string;
	email: string;
	content: string;
	phone: string;
}

interface SendButtonProps {
	isValid: boolean;
	loadingContact: [boolean, boolean];
	inside?: boolean;
}

const defaultValues: IValuesProps = {
	name: '',
	email: '',
	content: '',
	phone: '',
};

const SendButton: React.FC<SendButtonProps> = ({ isValid, loadingContact, inside }): JSX.Element => (
	<NewsletterButton type='submit' variant={inside ? 'contained' : 'outlined'} disabled={!isValid} inside={!!inside}>
		{!loadingContact ? (
			<CircularProgress size='24px' />
		) : (
			<>
				Trimite mesajul
				<Icon icon='material-symbols:double-arrow' width={30} />
			</>
		)}
	</NewsletterButton>
);

const ContactForm: React.FC = (): JSX.Element => {
	const theme = useTheme();

	const { sendContact, loadingContact, notification } = useContact();

	const {
		formState: { isValid },
		handleSubmit,
		reset,
		control,
	} = useForm<IValuesProps>({
		mode: 'onBlur',
		defaultValues,
		reValidateMode: 'onChange',
		resolver: yupResolver(schema) as Resolver<IValuesProps>,
	});

	const submitAction = (values: IValuesProps): void => {
		const sendData = { ...values };
		sendContact(sendData);
		reset();
	};

	return (
		<ContactFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<Flex width='100%' justifyCenter>
				<FormContainer>
					<FormInputSG name='name' control={control} width='100%' />
					<FormInputSG name='email' control={control} width='100%' />
				</FormContainer>
			</Flex>
			<FormInputSG name='phone' control={control} width='100%' />
			<FormInputSG name='content' control={control} width='100%' />
			<SendButton isValid={isValid} loadingContact={loadingContact} />

			{notification &&
				(notification === 'success' ? (
					<Typography color={theme.palette.success.main}>Mesajul a fost trimis cu succes!</Typography>
				) : (
					<Typography color={theme.palette.error.main}>
						Trimiterea mesajului nu functineaza! Mai incearca!
					</Typography>
				))}
		</ContactFormWrapper>
	);
};
export default ContactForm;
