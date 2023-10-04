import { Box, BoxProps, Theme, styled } from '@mui/material';
import { FC } from 'react';

interface ProductsPageSectionWrapperProps extends BoxProps {
	reverse?: boolean
}

const ProductsPageSectionWrapper: FC<ProductsPageSectionWrapperProps> =
	styled(Box as FC<ProductsPageSectionWrapperProps>, {
		shouldForwardProp: (prop: string) => prop !== 'reverse',
	})(({ theme, reverse }: { theme: Theme, reverse?: boolean }) => ({
		display: 'flex',
		gap: theme.spacing(8),
		alignItems: 'center',
		maxWidth: theme.spacing(150),
		...(reverse && {
			flexDirection: 'row-reverse'
		}),
		[theme.breakpoints.down('lg')]: {
			flexDirection: 'column-reverse',
			maxWidth: '100vh',
			width: '100%',
			gap: theme.spacing(5),
		}
	}));

export { ProductsPageSectionWrapper };