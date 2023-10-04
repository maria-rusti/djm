import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const NavButton: FC<LinkProps> = styled(Link)(({ theme }) => ({
	position: 'relative',
	fontSize: theme.spacing(2),
	borderRadius: 0,
	color: theme.palette.common.black,
	padding: theme.spacing(1),
	marginTop: theme.spacing(2),
	textTransform: 'none',
	textDecoration: 'none',
	'&: hover': {
		color: theme.palette.primary.main,
	},
}));

export const NavText: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	position: 'relative',
	fontSize: theme.spacing(2),
	color: theme.palette.common.white,
	padding: theme.spacing(1),
	marginTop: theme.spacing(2),
	cursor: 'pointer',
	'&: hover': {
		color: theme.palette.background.paper,
		fontSize: theme.spacing(4),
	},
	transition: 'all .3s ease-in-out',
}));
