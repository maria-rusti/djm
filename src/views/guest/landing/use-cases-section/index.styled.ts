import { Box, BoxProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

const UseCaseSectionWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'start',
	minHeight: theme.spacing(110),
	width: '100%',
	position: 'relative',
	gap: theme?.spacing(5),
	'::before': {
		content: '\'\'',
		position: 'absolute',
		bottom: 0,
		backgroundColor: alpha(theme.palette.secondary.light, 0.5),
		width: '100%',
		height: '100%',
		minHeight: theme.spacing(50),
		zIndex: '-1',
		clipPath: 'polygon(0 20%, 100% 5%, 100% 90%, 0 100%)',
	},
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column-reverse',
		gap: 0
	}
}));

export { UseCaseSectionWrapper };