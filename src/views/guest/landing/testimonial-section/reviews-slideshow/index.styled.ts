import { Box, BoxProps, styled } from '@mui/material';

const ReviewsSlideshowContainer = styled(Box)<BoxProps>(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	minWidth: theme.spacing(20),
	justifyContent: 'center',
	overflow: 'hidden',
	height: theme.spacing(51),
	background: 'trasparent',
	[theme.breakpoints.up('lg')]: {
		maxWidth: theme.spacing(150),
		position: 'relative'
	},
	'&::after': {
		position: 'absolute',
		height: theme.spacing(60),
		width: theme.spacing(6),
		backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, white 100%)',
		right: '0px',
		content: '\'\'',
		zIndex: 1
	},
	'&::before': {
		position: 'absolute',
		height: theme.spacing(60),
		width: theme.spacing(6),
		backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0) 0%, white 100%)',
		left: '0px',
		content: '\'\'',
		zIndex: 1
	},
}));

export { ReviewsSlideshowContainer };
