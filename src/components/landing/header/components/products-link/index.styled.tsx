import { Box, BoxProps, Theme, styled } from '@mui/material';
import { FC } from 'react';

interface IProductsLinksWrapperProps extends BoxProps {
	column?: string | undefined;
}

const ProductsLinksWrapper: FC<IProductsLinksWrapperProps> = styled(Box as FC<IProductsLinksWrapperProps>, {
	shouldForwardProp: (prop) => prop !== 'column',
})
(({ theme, column }: { theme: Theme, column?: string | undefined }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: column ? 'column' : 'row',
	maxWidth: theme.spacing(81),
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'start',
	},
}));

export { ProductsLinksWrapper };