import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const SocialsCardsWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	[theme.breakpoints.down(1060)]: {
		flexDirection: 'column'
	}
}));

export { SocialsCardsWrapper };