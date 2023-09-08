import { BoxProps ,Box, styled } from '@mui/material';
import { FC } from 'react';

const TermsOfServiceWrapper: FC<BoxProps> = styled(Box)(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	overflowY: 'auto'
}));

export default TermsOfServiceWrapper;