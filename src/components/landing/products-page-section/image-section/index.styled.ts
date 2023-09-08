import { Box, BoxProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

const ImageSectionWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	width: theme.spacing(110),
	backgroundColor: alpha(theme.palette.secondary.main, 0.5),
	height: theme.spacing(50),
	overflow: 'hidden',
	borderRadius: theme.shape.borderRadius,
	display: 'grid',
	placeItems: 'center',
	[theme.breakpoints.down('lg')]: {
		width: theme.spacing(70),
		height: theme.spacing(30)
	},
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	}
}));

const ProductsImageWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	position: 'relative',
	minHeight: '50%',
	width: theme.spacing(57),
	[theme.breakpoints.down(456)]: {
		width: '100%',
		padding: theme.spacing(5)
	}
}));

export { ImageSectionWrapper, ProductsImageWrapper };
