import { capitalize } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ConctactWrapper from './index.styled';
import { CardSG } from '../../../components/common';
import ContactForm from './components/contact-form';
import HeroSection from '../../../components/common/hero-section';


const Contact: FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<ConctactWrapper>
			<HeroSection 
				title={capitalize(t('contact'))}
				description='If you have any questions, dont hesitate to get in touch with us.
				 We ll get back to you within 48 hours.'
			/>
			<CardSG height='60vh' width='50%'>
				<ContactForm />
			</CardSG>
		</ConctactWrapper>
	);
};

export default Contact;
