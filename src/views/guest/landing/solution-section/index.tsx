import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Flex } from '../../../../components/common';
import { uuid } from '../../../../utils/functions';
import SolutionCard from './card';
import SolutionsCards from './data/solutions.json';
import GetStartedButton from '../../../../components/landing/buttons/get-started-button';
import { SolutionWrapper } from './index.styled';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import { SectionTitleSG } from '../../../../components/landing/section-title';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import backPartener from '../../../../assets/landingSection/backParteners.jpg';

export interface ISolutionCard {
	title: string;
	description: string;
	icon: string;
}

const SolutionSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const backgroundImageStyle = {
		backgroundImage: `url(${backPartener})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
	};

	return (
		<SectionWrapperSG sectionName='solutions-section' column>
			<Box sx={backgroundImageStyle} />
			<Flex sx={{ paddingTop: '10px' }} column maxWidth={theme.spacing(62)} gap={3}>
				<SectionBadgeSG variant='h3'>Parteneri</SectionBadgeSG>
				<SectionTitleSG>Alături de Sunet:</SectionTitleSG>
			</Flex>
			<SolutionWrapper sx={{ marginTop: theme.spacing(3), paddingTop: theme.spacing(3) }}>
				<Flex width='100%' flexWrap='wrap' justifyCenter maxWidth={theme.spacing(145)}>
					{SolutionsCards?.map(
						(card: ISolutionCard): JSX.Element => <SolutionCard key={`${uuid()}-solution-card`} {...card} />
					)}
				</Flex>
			</SolutionWrapper>
			<GetStartedButton
				sx={{ marginBottom: '10px' }}
				onClick={(): void => {
					window.location.href = 'https://app.socialgod.shop/auth/sign-in';
				}}
			/>
		</SectionWrapperSG>
	);
};

export default SolutionSection;
