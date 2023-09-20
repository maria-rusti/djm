import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

interface IProps extends BoxProps {
	image?: string
}

export const SolutionWrapper: FC<IProps> = styled(Box as FC<IProps>, {
	shouldForwardProp: (prop: string) => prop !== 'image',
})(({ theme, image }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 'auto',
	width: '100%',
	overflow: 'hidden',
	paddingTop: theme.spacing(2),
	position: 'relative',
	background: `url(${image}) center/cover no-repeat fixed`,
	animation: 'wave 30s linear infinite',
	zIndex: '1',

	'@keyframes wave': {
		'0%': {
			backgroundPosition: '0 50%',
		},
		'50%': {
			backgroundPosition: '100% 50%',
		},
		'100%': {
			backgroundPosition: '0 50%',
		},
	},

	[theme.breakpoints.down('md')]: {
		background: `url(${image}) center/cover no-repeat`,
	},
	flexDirection: 'column',
	maxWidth: '100%',
	paddingBottom: theme.spacing(3),
	'::before': {
		content: '\'\'',
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'rotateZ(15deg) translate(-50%)',
		width: '100%',
		minHeight: '400px',
		zIndex: '-1',
		borderRadius: theme.shape.borderRadius,
		[theme.breakpoints.down('lg')]: {
			width: 'calc(100% - 300px)',
			height: '70%',
			top: theme.spacing(30),
		},
		[theme.breakpoints.down('md')]: {
			transform: 'rotateZ(3deg) translate(-50%)',
			height: '85%',
			top: theme.spacing(10),
			width: 'calc(100% - 200px)',
		},
		[theme.breakpoints.down('sm')]: {
			transform: 'rotateZ(0deg) translate(-50%)',
			height: '100%',
			top: 0,
			width: 'calc(100% - 20px)',
		}
	}
}));