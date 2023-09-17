import React from 'react';
import { useTheme } from '@mui/material';
import { Flex } from '../../../../components/common';
import { uuid } from '../../../../utils/functions';
import SolutionCard from './card';
import SolutionsCards from './data/solutions.json';
import GetStartedButton from '../../../../components/landing/buttons/get-started-button';
import { SolutionWrapper } from './index.styled';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import { SectionTitleDistinctSG } from '../../../../components/landing/section-title/index.styled';
import { SectionTitleSG } from '../../../../components/landing/section-title';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

export interface ISolutionCard {
	title: string;
	description: string;
	icon: string;
}

const SolutionSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	return (
		<SectionWrapperSG sectionName='solutions-section' column>
			<Flex column maxWidth={theme.spacing(62)} gap={3}>
				<SectionBadgeSG variant='h3'>Parteneri</SectionBadgeSG>
				<SectionTitleSG>
					Alături de Sunet:
					<SectionTitleDistinctSG>Colaborările Noastre</SectionTitleDistinctSG>.
				</SectionTitleSG>
			</Flex>
			<SolutionWrapper sx={{ marginTop: theme.spacing(3), paddingTop: theme.spacing(3) }}>
				<Flex flexWrap='wrap' justifyCenter maxWidth={theme.spacing(145)}>
					{SolutionsCards?.map(
						(card: ISolutionCard): JSX.Element => <SolutionCard key={`${uuid()}-solution-card`} {...card} />
					)}
				</Flex>
			</SolutionWrapper>
			<GetStartedButton
				onClick={(): void => {
					window.location.href = 'https://app.socialgod.shop/auth/sign-in';
				}}
			/>
		</SectionWrapperSG>
	);
};

export default SolutionSection;
