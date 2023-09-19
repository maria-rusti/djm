import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

export const Wrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 'auto',
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
	marginTop: '10px',
	animation: 'wave 10s linear infinite',
	zIndex: '1'
}));

interface CarouselBoxProps extends BoxProps {
	movement: number;
}

interface CardBoxProps extends BoxProps {
	selected?: string;
	id?: string;
}

export const Carousel: FC<CarouselBoxProps> = styled(Box as FC<CarouselBoxProps>, {
	shouldForwardProp: (prop: string) => prop !== 'movement',
})(({ theme, movement }) => ({
	minWidth: '660px',
	minHeight: '400px',
	maxWidth: 1200,
	margin: '50px 0',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	transform: `translate(${movement}px)`,
	transition: 'transform 1s',
	scrollBehavior: 'smooth',
	[theme.breakpoints.down('md')]: {
		minWidth: '100%',
		margin: `0 0 ${theme.spacing(10)} 0`,
	},
	[theme.breakpoints.down('sm')]: {
		minWidth: '100%',
		margin: `0 0 ${theme.spacing(10)} ${theme.spacing(4)}`,
	},
}));

export const Card: FC<CardBoxProps> = styled(Box as FC<CardBoxProps>, {
	shouldForwardProp: (prop: string) => prop !== 'selected' && prop !== 'id',
})(({ theme }) => ({
	width: '300px',
	height: '300px',
	backgroundColor: '#fff',
	minWidth: '250px',
	border: '1px solid',
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(2),
	margin: '0 15px',
	cursor: 'grab',
	transition: 'all .5s ease-in-out',
}));
