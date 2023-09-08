import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const ProductsPageWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		width: '92%',
		marginLeft: theme.spacing(2)
	}
}));

export { ProductsPageWrapper };