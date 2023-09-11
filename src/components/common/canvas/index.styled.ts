import { styled } from '@mui/material';

const StyledCanvas = styled('canvas')(({ theme }) => ({
	width: '1500px',
	height: '612px',
	[theme.breakpoints.down(942)]: {
		width: '100%',
		height: 'auto',
	}
}));

export { StyledCanvas };