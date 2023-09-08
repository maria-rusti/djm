import { styled } from '@mui/material';

export const SliderItem = styled('li')
(({ theme }) => ({
	width :'200px',
	fontSize : '3rem',
	display :'flex',
	justifyContent : 'center',
	alignItems: 'center',
	margin: '0 25px',
	padding: '0px',
	height: '60px',
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#fafafa',
		scale: '1.1'
	}
}));