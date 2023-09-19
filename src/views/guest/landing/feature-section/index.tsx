import React, { FC, useState } from 'react';
import { Grid, GridProps } from '@mui/material';
import { Flex } from '../../../../components/common';
// import { uuid } from '../../../../utils/functions';
import features from './data/features.json';
import FeatureTitle from './components/FeatureTitle';
import { IFeature } from './index.interfaces';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { FeatureCardContiner, FeatureCardSubtitle, FeatureCardTitle, StyledIcon } from './components/index.styled';
import { SolutionWrapper } from '../solution-section/index.styled';
import featureImage from '../../../../assets/landingSection/feature.jpg';

interface IFeatureCardProps extends GridProps {
	feature: IFeature;
	small?: boolean;
	hover?: boolean;
	landing?: boolean;
}

export const FeatureCard: FC<IFeatureCardProps> = (props: IFeatureCardProps) => {
	const { feature, small, hover, landing, ...other } = props;
	return (
		<FeatureCardContiner landing={landing ? 1 : 0} item xs={12} sm={6} md={6} lg={4} small={small} {...other}>
			<StyledIcon icon={feature?.icon} small={small} />
			<Flex width='calc(100% - 100px)' alignContent='flex-start' gap={1}>
				<FeatureCardTitle landing={landing ? 1 : 0} small={small} hover={hover}>
					{feature?.title}
				</FeatureCardTitle>
				<FeatureCardSubtitle landing={landing ? 1 : 0} small={small} hover={hover}>
					{feature?.description}
				</FeatureCardSubtitle>
			</Flex>
		</FeatureCardContiner>
	);
};

FeatureCard.defaultProps = {
	small: false,
	hover: false,
	landing: false,
};

const FeatureSection: FC = () => {
	const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
	const handleCardHover = (index: number): void => {
		setHoveredCardIndex(index);
	};
	const handleCardLeave = (): void => {
		setHoveredCardIndex(null);
	};

	return (
		<SectionWrapperSG sectionName='feature-secions' column>
			<SolutionWrapper image={featureImage}>
				<FeatureTitle />
				<Flex width='100%' maxWidth='1200px' column justifySelf='center' justifyCenter p={1} gap={4}>
					<Grid container rowGap={4} columnSpacing={4}>
						{features?.map((feature: IFeature, index) => (
							<FeatureCard
								landing
								key={`${feature.title}-${feature.description}-feature-card`}
								feature={feature}
								hover={index === hoveredCardIndex}
								onMouseOver={(): void => handleCardHover(index)}
								onMouseLeave={(): void => handleCardLeave()}
							/>
						))}
					</Grid>
				</Flex>
			</SolutionWrapper>
		</SectionWrapperSG>
	);
};
export default FeatureSection;
