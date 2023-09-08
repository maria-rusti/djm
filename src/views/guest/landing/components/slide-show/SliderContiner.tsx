import { styled } from '@mui/material';

export const SliderContainer = styled('div')
(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: theme.spacing(25),
	backgroundColor: '#fff',
	display :'flex',
	alignItems: 'center',
	overflow: 'hidden',
	// marginBottom : theme.spacing(13),
}));