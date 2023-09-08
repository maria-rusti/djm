import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { GetStartedBoxProps } from './index.interfaces';

const StyledGetStartedBox: FC<GetStartedBoxProps> = styled(Box as FC<GetStartedBoxProps>, {
	shouldForwardProp: (prop) => prop !== 'big'
})(({ theme, big }) => ({
	minHeight: theme.spacing(45),
	height: theme.spacing(45),
	width: theme.spacing(145),
	background: theme.palette.primary.main,
	borderRadius: theme.spacing(6),
	padding: theme.spacing(2),
	margin: theme.spacing(6),
	[theme.breakpoints.down('lg')]: {
		width: '100%',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2)
	},
	[theme.breakpoints.down('md')]: {
		overflow: 'hidden',
	},
	...(big && {
		[theme.breakpoints.down('md')]: {
			height: 'auto',
			width: '100%'
		}
	})
}));

export { StyledGetStartedBox };