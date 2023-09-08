import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const TextSectionWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '40%',
	gap: theme.spacing(5),
	alignItems: 'flex-start',
	[theme.breakpoints.down('lg')]: {
		maxWidth: theme.spacing(45),
	}
}));

export { TextSectionWrapper };