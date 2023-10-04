import { Box, BoxProps, Theme, styled } from '@mui/material';
import { FC } from 'react';
import { AbsoluteImageProps, FloatingImageProps, HeroSectionWrapperProps } from './index.interfaces';

const floatingImageProps = ['top', 'left', 'above', 'width', 'cardImage'];

const FloatingImageComponent: FC<FloatingImageProps> = styled(Box as  FC<FloatingImageProps>, {
	shouldForwardProp: (prop: string) => !floatingImageProps.includes(prop),
})(({ top, left, width, above, cardImage, theme }) => ({
	height: 'auto',
	position: 'absolute',
	zIndex: above ? 2 : 1,
	width,
	...( cardImage ? {
		maxWidth: '250px',
		top,
		left,
		[theme.breakpoints.only('sm')]: {
			maxWidth: '350px',
		},
	} : {
		maxWidth: '350px',
		top,
		left,
		[theme.breakpoints.down('sm')]: {
			maxWidth: '250px',
		},
	}),
	[theme.breakpoints.only('xs')]: {
		maxWidth: '80%',
	},
}));

const HeroSectionWrapper: FC<HeroSectionWrapperProps> = styled(Box as FC<HeroSectionWrapperProps>, {
	shouldForwardProp: (prop: string) => prop !== 'reverse',
})(({ theme, reverse }: { theme: Theme, reverse?: boolean }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: '100%',
	alignItems: 'flex-end',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		flexDirection: reverse ? 'column-reverse' : 'column',
		width: '100%',
		alignItems: 'center',
		gap: theme.spacing(10),
	},
	[theme.breakpoints.down('sm')]: {
		flexDirection: reverse ? 'column-reverse' : 'column',
		width: '100%',
	},
}));

const ImageWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'grid',
	placeItems: 'center',
	width: '100%',
	maxWidth: theme.spacing(50),
	position: 'relative',
	height: theme.spacing(75),
	justifySelf: 'center',
	[theme.breakpoints.down('sm')]: {
		maxWidth: theme.spacing(44),
		height: theme.spacing(60),
	},
}));

const absoluteIconProps = ['top', 'left'];

const AbsoluteImage = styled('img', {
	shouldForwardProp: (prop: string) => !absoluteIconProps.includes(prop),
})(({ top, left }: AbsoluteImageProps) => ({
	position: 'absolute',
	top,
	left
}));

export const SecondHeroSectionWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 'auto',
	width: '100%',
	maxWidth: theme.spacing(150),
	margin: theme.spacing(0),
	overflow: 'hidden',
	position: 'relative',
	padding: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		width: '100%',
		marginRight: theme.spacing(2),
	},
	'::before': {
		content: '\'\'',
		position: 'absolute',
		clipPath: 'polygon(0 5%, 100% 0%, 100% 90%, 0% 95%)',
		// backgroundColor: alpha(theme.palette.secondary.light, 0.4),
		width: '100%',
		height: '100%',
		zIndex: '-1',
	}
}));

export { FloatingImageComponent, HeroSectionWrapper, ImageWrapper, AbsoluteImage };
