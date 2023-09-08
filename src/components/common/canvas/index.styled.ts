import { styled } from '@mui/material';

const StyledCanvas = styled('canvas')(({ theme }) => ({
	width: '942px',
	height: '612px',
	[theme.breakpoints.down(942)]: {
		width: '100%',
		height: 'auto',
	}
}));

export { StyledCanvas };