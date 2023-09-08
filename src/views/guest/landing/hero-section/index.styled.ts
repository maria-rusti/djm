import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const RotatingCanvas: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	transform: ' rotate3d(0, -1, 0, -5deg)',
	transition: theme.transitions.create(['transform']),
	zIndex: 1,
	objectFit: 'contain',
	':hover': {
		transform: ' rotate3d(0, 0, 0, 0deg)',
	},
}));

const HeroSectionWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
	height: '100%',
	'::before': {
		content: '\'\'',
		position: 'absolute',
		bottom: theme.spacing(10),
		clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 80%)',
		width: '100%',
		height: '100%',
		zIndex: '-1',
	}
}));

const FlyingIcon: FC<IconProps> = styled(Icon)(({ theme }) => ({
	'@keyframes floating': {
		'0%': {
			transform: 'translateY(0)'
		},
		'50%': {
			transform: 'translateY(-10px)'
		},
		'100%': {
			transform: 'translateY(0px)'
		}
	},
	animation: 'floating 3s ease-in-out infinite',
	transition: theme.transitions.create(['transform']),
	position: 'absolute',
	[theme.breakpoints.up('md')]: {
		width: theme.spacing(15),
		height: theme.spacing(15),
	},
	[theme.breakpoints.down('md')]: {
		width: theme.spacing(6),
		height: theme.spacing(6),
	}
}));

const LikesAndHeartsWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	'@keyframes floating': {
		'0%': {
			transform: 'translateY(0)'
		},
		'50%': {
			transform: 'translateY(-10px)'
		},
		'100%': {
			transform: 'translateY(0px)'
		}
	},
	animation: 'floating 3s ease-in-out infinite',
	width: '100%',
	height: '100%',
	top: '18%',
	left: '70%',
	zIndex: 1,
	transition: theme.transitions.create(['transform']),
	position: 'absolute',
	[theme.breakpoints.up('md')]: {
		width: theme.spacing(50),
		height: theme.spacing(80),
		left: '80%',

	},
	[theme.breakpoints.down('md')]: {
		width: theme.spacing(20),
		height: theme.spacing(32),
	},
	transform: 'rotate(35deg)'
}));

const Image = styled('img')({
	width: '100%',
	height: '100%',
	objectFit: 'contain'
});

const RedditIcon: FC<IconProps> = styled(FlyingIcon)(() => ({
	top: '10%',
	left: '-10%',
}));

const TwitterIcon: FC<IconProps> = styled(FlyingIcon)(() => ({
	top: '92%',
	left: '-10%',
	zIndex: '1',
}));

const YoutubeIcon: FC<IconProps> = styled(FlyingIcon)(() => ({
	top: '-10%',
	left: '80%'
}));

const TiktokIcon: FC<IconProps> = styled(FlyingIcon)(() => ({
	top: '-13%',
	left: '20%',
	zIndex: '1',
}));

const AnimatedSection: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	perspective: theme.spacing(100),
	maxWidth: theme.spacing(187),
	maxHeight: theme.spacing(187),
	paddingTop: theme.spacing(1),
	display: 'grid',
	placeItems: 'center'
}));

export {
	RotatingCanvas, FlyingIcon, RedditIcon, TwitterIcon,
	YoutubeIcon, TiktokIcon, AnimatedSection, HeroSectionWrapper,
	LikesAndHeartsWrapper, Image
};