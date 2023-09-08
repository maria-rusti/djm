import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const GetStartedBoxContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	height: '100%',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		justifyContent: 'center',
		gap: theme.spacing(4)
	}
}));

export { GetStartedBoxContent };