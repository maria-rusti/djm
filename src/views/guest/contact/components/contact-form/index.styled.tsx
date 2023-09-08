import { Box, BoxProps, styled } from '@mui/system';
import { FC } from 'react';

const ContactFormWrapper = styled('form')(() => ({
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	alignItems: 'center',
	gap: 30,
	flexDirection: 'column',

}));

const FormContainer: FC<BoxProps> = styled(Box as FC<BoxProps>)(({theme}) => ({
	width: '100%',
	display: 'flex',
	gap: 10,
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	}
}));

export {ContactFormWrapper, FormContainer};