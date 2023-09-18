import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { StyledTitle } from './index.styled';

interface IProps {
	title: string;
	description: string;
}

const HeroSection: FC<IProps> = ({ title, description }) => (
	<>
		<StyledTitle>{title}</StyledTitle>
		<Typography variant='h6' color='grey'>
			{description}
		</Typography>
	</>
);

export default HeroSection;
