import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const PricesWrapper: FC<BoxProps> = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	alignItems: 'center'
}));

export { PricesWrapper };