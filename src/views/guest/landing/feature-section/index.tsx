import React, { FC, useState } from 'react';
import { Grid, GridProps } from '@mui/material';
import { Flex } from '../../../../components/common';
// import { uuid } from '../../../../utils/functions';
import features from './data/features.json';
import FeatureTitle from './components/FeatureTitle';
import { IFeature } from './index.interfaces';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SectionDivider } from '../components/section-divider/index.styled';
import {
	FeatureCardContiner,
	FeatureCardSubtitle,
	FeatureCardTitle,
	StyledIcon,
} from './components/index.styled';

interface IFeatureCardProps extends GridProps {
	feature: IFeature;
	small?: boolean;
	hover?: boolean;
}

export const FeatureCard: FC<IFeatureCardProps> = (props: IFeatureCardProps) => {
	const { feature, small, hover, ...other } = props;
	return (
		<FeatureCardContiner item xs={12} sm={6} md={6} lg={4} small={small} {...other}>
			<StyledIcon icon={feature?.icon} small={small} />
			<Flex width='calc(100% - 100px)' alignContent='flex-start' gap={1}>
				<FeatureCardTitle small={small} hover={hover}>
					{feature?.title}
				</FeatureCardTitle>
				<FeatureCardSubtitle small={small} hover={hover}>
					{feature?.description}
				</FeatureCardSubtitle>
			</Flex>
		</FeatureCardContiner>
	);
};

FeatureCard.defaultProps = {
	small: false,
	hover: false,
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
			<FeatureTitle />
			<Flex width='100%' maxWidth='1200px' column justifySelf='center' justifyCenter p={1} gap={4}>
				<Grid container rowGap={4} columnSpacing={4}>
					{features?.map((feature: IFeature, index) => (
						<FeatureCard
							key={`${feature.title}-${feature.description}-feature-card`}
							feature={feature}
							hover={index === hoveredCardIndex}
							onMouseOver={(): void => handleCardHover(index)}
							onMouseLeave={(): void => handleCardLeave()}
						/>
					))}
				</Grid>
			</Flex>
			<SectionDivider />
		</SectionWrapperSG>
	);
};
export default FeatureSection;
