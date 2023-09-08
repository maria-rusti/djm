import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import privacyPolicy from './data/privacy-policy.json';
import HeroSection from '../../../components/common/hero-section';
import StaticContent, { DataPropType } from '../../../components/common/static-content';
import PrivacyPolicyWrapper from './index.styled';
import { Flex } from '../../../components/common';

const PrivacyPolicy: FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<PrivacyPolicyWrapper>
			<Flex column sx={{ width: '100%', p: 1,}}>
				<HeroSection title={t('privacy_policy.title')} description='ceva' />
				<StaticContent data={privacyPolicy as DataPropType} />
			</Flex>
		</PrivacyPolicyWrapper>
	);
};

export default PrivacyPolicy;