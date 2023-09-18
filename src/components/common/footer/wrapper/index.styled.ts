import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const FooterWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({theme}) => ({
	width: '100%',
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'space-evenly',
	flexDirection: 'column',
	position: 'relative',
	marginTop: theme.spacing(1),
}));

const ColoredSection: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	minHeight: theme.spacing(35),
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'end',
	alignItems: 'center',
	paddingTop: theme.spacing(2)
}));

export { FooterWrapper, ColoredSection };
