import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import serviciiLanding from '../../../../assets/landingSection/serviciiLanding.jpg';

export const SolutionWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 'auto',
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
	marginTop: '10px',
	background: `url(${serviciiLanding}) center/cover no-repeat fixed`,
	animation: 'wave 10s linear infinite',
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
		backgroundSize: 'cover',
	},
	flexDirection: 'column',
	maxWidth: theme.spacing(150),
	marginBottom: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	'::before': {
		content: '\'\'',
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'rotateZ(15deg) translate(-50%)',
		width: '900px',
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