import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const NotFoundWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	overflowY: 'auto',
}));

const NotFoundContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(({theme}) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	minHeight: '90vh',
	gap: theme.spacing(1)
}));

const NotFoundImage = styled('img')(({theme}) => ({
	width: '30%',
	[theme.breakpoints.down('lg')]: {
		width: '30%'
	},
	[theme.breakpoints.down('md')]: {
		width: '45%'
	},
	[theme.breakpoints.down('sm')]: {
		width: '60%'
	},
	
}));

export {NotFoundWrapper, NotFoundImage, NotFoundContent};
