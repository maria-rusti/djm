import { BoxProps ,Box, styled } from '@mui/material';
import { FC } from 'react';

const ContactWrapper: FC<BoxProps> = styled(Box)(({theme}) => ({
	width: '100%',
	minHeight: '100vh',
	height: '100%',
	display: 'flex',
	padding: theme.spacing(2),
	justifyContent: 'space-evenly',
	alignItems: 'center',
	flexDirection: 'column',
	overflowY: 'auto',
}));

export default ContactWrapper;