import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import CardSG, { CardPropsSG } from '../../../../../components/common/card/base';

const StyledUseCaseCard: FC<CardPropsSG> = styled(CardSG)(({ theme }) => ({
	maxWidth: '100%',
	minWidth: theme.spacing(144),
	minHeight: theme.spacing(68),
	[theme.breakpoints.down('lg')]: {
		minWidth: '92%',
		marginLeft: theme.spacing(2),
	},
	[theme.breakpoints.down('md')]: {
		minHeight: theme.spacing(115)
	},
	[theme.breakpoints.down('sm')]: {
		minHeight: theme.spacing(100),
	}
}));

const StyledUseCaseImage = styled('img')(({ theme }) => ({
	maxWidth: '100%',
	width: theme.spacing(75),
	objectFit: 'cover',
	[theme.breakpoints.down('lg')]: {
		width: theme.spacing(60),
	},
	[theme.breakpoints.down('md')]: {
		width: theme.spacing(75),
	}
}));

const UseCardContent: FC<BoxProps> = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	gap: theme.spacing(5),
	alignItems: 'center',
	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(2)
	},
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column'
	}
}));

export { StyledUseCaseCard, StyledUseCaseImage, UseCardContent };