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
				description={`Conectează-te Cu 
				Echipa Noastră - Contactează-ne pentru 
				Asistență Personalizată și Răspunsuri la Întrebările Tale`}
			/>
			<CardSG height='80vh' width='50%'>
				<ContactForm />
			</CardSG>
		</ConctactWrapper>
	);
};

export default Contact;
