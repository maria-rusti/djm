import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import termsOfService from './data/terms-of-service.json';
import HeroSection from '../../../components/common/hero-section';
import StaticContent, { DataPropType } from '../../../components/common/static-content';
import TermsOfServiceWrapper from './index.styled';
import { Flex } from '../../../components/common';
// data ending as *_arr_item should be threathed as item of an array, replace 'arr' with the index + 1

const TermsOfService: FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<TermsOfServiceWrapper>
			<Flex column sx={{ width: '100%', p: 1}}>
				<HeroSection title={t('terms_of_service.title')} description='ceva' />
				<StaticContent data={termsOfService as DataPropType} />
			</Flex>
		</TermsOfServiceWrapper>
	);
};

export default TermsOfService;
