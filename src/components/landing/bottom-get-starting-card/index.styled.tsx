import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';
import { ImageWrapper } from '../../../views/guest/landing/second-hero-section/index.styles';

const BottomGetStartedCardContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	height: '100%',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	}
}));

const TextSection: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: theme.spacing(5),
}));

const BottomSectionImageWrapper: FC<BoxProps> = styled(ImageWrapper)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		height: theme.spacing(50),
	},
	[theme.breakpoints.down(500)]: {
		height: theme.spacing(30)
	},
	[theme.breakpoints.down(400)]: {
		height: theme.spacing(20)
	}
}));

export { BottomGetStartedCardContent, TextSection, BottomSectionImageWrapper };