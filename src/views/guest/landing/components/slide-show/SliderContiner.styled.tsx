import { styled } from '@mui/material';

export const SliderContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: theme.spacing(15),
	backgroundColor: 'transparent',
	display: 'flex',
	alignItems: 'center',
	overflow: 'hidden',
}));
