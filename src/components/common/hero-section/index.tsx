import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { HeroSectionWrapper, StyledTitle } from './index.styled';

interface IProps {
	title: string;
	description: string;
}

const HeroSection: FC<IProps> = ({ title, description }) => (
	<HeroSectionWrapper>
		<StyledTitle>
			{title}
		</StyledTitle>
		<Typography variant='h6' color='grey'>{description}</Typography>
	</HeroSectionWrapper>
);

export default HeroSection;
