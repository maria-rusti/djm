import React from 'react';
import { useTheme } from '@mui/material';
import { Flex } from '../../../../components/common';
import { uuid } from '../../../../utils/functions';
import SolutionCard from './card';
import SolutionsCards from './data/solutions.json';
import GetStartedButton from '../../../../components/landing/buttons/get-started-button';
import { SolutionWrapper } from './index.styled';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import { SectionTitleSG } from '../../../../components/landing/section-title';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
// import serviciiImage from '../../../../assets/landingSection/serviciiLanding.jpg';

export interface ISolutionCard {
	title: string;
	description: string;
	icon: string;
}

const SolutionSection: React.FC = (): JSX.Element => {
	const theme = useTheme();

	return (
		<SectionWrapperSG sectionName='solutions-section' column>
			<SolutionWrapper
				image='https://storage.googleapis.com/sbdcloud/djm-1695385228693-serviciiLanding.jpg'
				sx={{ paddingTop: theme.spacing(3) }}
			>
				<Flex sx={{ paddingTop: '10px' }} column maxWidth={theme.spacing(62)} gap={3}>
					<SectionBadgeSG>Parteneri</SectionBadgeSG>
					<SectionTitleSG>Alături de Sunet:</SectionTitleSG>
				</Flex>
				<Flex width='100%' flexWrap='wrap' justifyCenter minWidth='100%' maxWidth='100%'>
					{SolutionsCards?.map(
						(card: ISolutionCard): JSX.Element => <SolutionCard key={`${uuid()}-solution-card`} {...card} />
					)}
				</Flex>
				<GetStartedButton
					sx={{ marginBottom: '10px' }}
					onClick={(): void => {
						window.location.href = 'https://app.socialgod.shop/auth/sign-in';
					}}
				/>
			</SolutionWrapper>
		</SectionWrapperSG>
	);
};

export default SolutionSection;
