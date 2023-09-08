import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const SectionsWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	maxWidth: theme.spacing(150),
	width: '100%',
	justifySelf: 'center',
	[theme.breakpoints.up('md')]: {
		justifyContent: 'space-between',
	},
	[theme.breakpoints.down('md')]: {
		justifyContent: 'flex-start',
	},
	flexWrap: 'wrap'
}));

const ButtonText: FC<LinkProps> = styled(Link)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-start',
	textTransform: 'none',
	height: theme.spacing(5),
	textDecoration: 'none'
}));

const SectionWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	margin: `${theme.spacing(4)} 0`,
	minWidth: theme.spacing(25),
	[theme.breakpoints.down('md')]: {
		width: '50%',
		alignItems: 'center'
	},
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	}
}));

const AnimatedHoverText: FC<LinkProps> = styled(Link)(({ theme }) => ({
	color: theme.palette.common.white,
	fontWeight: 500,
	textDecoration: 'none',
	padding: theme.spacing(1),
	transition: theme.transitions.create(['transform', 'color', 'backgroundColor']),
	borderRadius: theme.shape.borderRadius,
	':hover': {
		transform: 'translateX(7px)',
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.background.default,
	},
}));

const SectionTitle: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.white,
	fontSize: theme.typography.h4.fontSize,
	margin: `0 ${theme.spacing(1)}`,
	fontWeight: 600
}));

export { SectionsWrapper, ButtonText, SectionWrapper, AnimatedHoverText, SectionTitle };