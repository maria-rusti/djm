import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const InitialPrice: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	fontSize: theme.typography.h5.fontSize,
	position: 'relative',
	':before': {
		content: '\'\'',
		position: 'absolute',
		clipPath: 'polygon(95% 0, 100% 0, 100% 5%, 5% 100%, 0 100%, 0 95%)',
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		height: '100%',
	}
}));

export { InitialPrice };