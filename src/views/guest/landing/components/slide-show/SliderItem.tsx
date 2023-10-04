import { styled } from '@mui/material';

export const SliderItem = styled('li')(({ theme }) => ({
	width: '200px',
	fontSize: '3rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0', 
	height: '60px',
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#fafafa',
		transform: 'scale(1.1)', 
	},
}));
