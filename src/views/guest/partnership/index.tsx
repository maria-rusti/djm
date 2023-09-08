import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { capitalize } from '@mui/material/utils';
import HeroSection from '../../../components/common/hero-section';
import { PartnershipWrapper } from './index.styled';
import PartnershipForm from './partnership-form';

const Partnership: React.FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<PartnershipWrapper>
			<Box
				display='flex' width='100%' alignItems='center' flexDirection='column'
			>
				<HeroSection
					title={capitalize(t('partnership'))}
					description='Apply for a partnership with SocialGod'
				/>
				<PartnershipForm />
			</Box>
		</PartnershipWrapper>
	);
};

export default Partnership;
