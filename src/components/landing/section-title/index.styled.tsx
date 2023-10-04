import { FC } from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const glowAnimation = {
	'0%': {
		textShadow: '0 0 30px pink, 0 0 30px white',
	},
	'50%': {
		textShadow: '0 0 30px pink, 0 0 80px white',
	},
	'100%': {
		textShadow: '0 0 30px pink, 0 0 30px white',
	},
};

const SectionTitleTypho: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	maxWidth: '700px',
	color: theme.palette.primary.main,
	display: 'inline-block',
	padding: '4px 8px',
	textShadow: '0 0 50px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.8)',
	animation: 'glow 2s infinite',
	[theme.breakpoints.down('sm')]: {
		marginBottom: theme.spacing(1),
		fontSize: theme.spacing(3.5),
	},
	'@keyframes glow': glowAnimation,
}));

const SectionTitleDistinctSG = styled('span')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	color: theme.palette.common.white,
	display: 'flex',
	alignSelf: 'flex-start',
}));

export { SectionTitleTypho, SectionTitleDistinctSG };
