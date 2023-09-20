import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const LandingPageContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(() => ({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	height: 'auto',
	overflow: 'hidden'
}));

const LandingPageWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)({
	width: '100%',
	height: 'auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	overflowY: 'hidden',
});

export { LandingPageContent, LandingPageWrapper };