import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '@iconify/react';
import { ContactFormWrapper, FormContainer } from './index.styled';
import useContact from '../../../../../hooks/fetch-hooks/use-contact';
import { schema } from './index.form';
import { NewsletterButton } from '../../../landing/newsletter-section/newsletter-form/index.styled';
import { FormInputSG } from '../../../../../components/common/input';
import { Flex } from '../../../../../components/common';


export interface IValuesProps {
	name: string,
	email: string,
	message: string
};

interface SendButtonProps {
	isValid: boolean,
	loadingContact: [boolean, boolean],
	inside? :boolean
}

const defaultValues: IValuesProps = {
	name: '',
	email: '',
	message: ''
};

const SendButton: React.FC<SendButtonProps>
	= ({ isValid, loadingContact, inside }): JSX.Element => (
		<NewsletterButton type='submit' variant={inside ? 'contained' : 'outlined'}
			disabled={!isValid} inside={!!inside} >
			{!loadingContact ?
				<CircularProgress size='24px' /> :
				<>Send message< Icon icon='material-symbols:double-arrow' width={30} /></>}
		</NewsletterButton>
	);

const ContactForm: React.FC = (): JSX.Element =>{ 

	const theme = useTheme();

	const { sendContact, loadingContact, notification } = useContact();
	
	const {
		formState: { isValid },
		handleSubmit,
		reset,
		control
	} = useForm<IValuesProps>({
		mode: 'onBlur',
		defaultValues,
		reValidateMode: 'onChange',
		resolver: yupResolver(schema) as Resolver<IValuesProps>,
	});



	const submitAction = (values: IValuesProps): void => {
		const sendData = { ...values};
		sendContact(sendData);
		reset();
	};

	return (
		<ContactFormWrapper onSubmit={handleSubmit(submitAction, console.error)}>
			<Flex width='100%' justifyCenter>
				<FormContainer>
					<Box width='100%'>
						<Typography>
							Full name
						</Typography>
						<FormInputSG name='name' control={control}  width='100%'/>
					</Box>
					<Box width='100%'>
						<Typography>
							Email
						</Typography>
						<FormInputSG name='email' control={control}  width='100%'/>
					</Box>
				</FormContainer>
			</Flex>
			<Box width='100%'>
				<Typography>
					Message
				</Typography>
				<FormInputSG name='message' control={control} width='100%'/>
			</Box>

			<SendButton isValid={isValid} loadingContact={loadingContact} />

			{
				notification && 
				(notification === 'success' ? 
					<Typography color={theme.palette.success.main}>
						Message sent succesfully!
					</Typography> : 
					<Typography color={theme.palette.error.main}>
						An error accured while sending this message!
					</Typography>)}
		</ContactFormWrapper>
	);}
;

export default ContactForm;