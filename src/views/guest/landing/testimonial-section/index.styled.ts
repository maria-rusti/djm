import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const TestimonialsWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	gap: theme.spacing(10),
	display: 'flex',
	flexDirection: 'column',
	maxWidth: theme.spacing(150),
	[theme.breakpoints.down('lg')]: {
		maxWidth: '100%'
	}
}));

const TestimonialsContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	maxWidth: theme.spacing(150),
	justifyContent: 'space-between',
	margin: theme.spacing(2),
	gap: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		alignItems: 'center',
		flexDirection: 'column'
	}
}));

export { TestimonialsWrapper, TestimonialsContent };