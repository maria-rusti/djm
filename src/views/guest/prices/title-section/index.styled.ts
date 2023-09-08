import { Box, BoxProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

const TitleSectionWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	height: theme.spacing(50),
	maxWidth: theme.spacing(75),
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: theme.spacing(5),
	':before': {
		content: '\'\'',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '50%',
		clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
		backgroundColor: alpha(theme.palette.secondary.light, 0.5),
		zIndex: -1
	}
}));
export { TitleSectionWrapper };