import React, { FC } from 'react';
import { StyledTitle } from './index.styled';
import { SolutionCardSubtitle } from '../../../views/guest/landing/solution-section/card/index.styled';

interface IProps {
	title: string;
	description: string;
}

const HeroSection: FC<IProps> = ({ title, description }) => (
	<>
		<StyledTitle>{title}</StyledTitle>
		<SolutionCardSubtitle sx={{ paddingBottom: '24px' }}>{description}</SolutionCardSubtitle>
	</>
);

export default HeroSection;
