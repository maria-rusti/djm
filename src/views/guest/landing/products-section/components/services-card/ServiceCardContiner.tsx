import { Box, BoxProps, styled, Theme } from '@mui/material';
import { FC } from 'react';

const ServiceCardContiner: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }: { theme: Theme }) => ({
	width: theme.spacing(37),
	margin: theme.spacing(2),
	height: theme.spacing(40),
	minHeight: theme.spacing(16),
	minWidth: '300px',
	background: `${theme.palette.background.paper}`,
	borderRadius: theme?.shape?.borderRadius,
	boxSizing: 'border-box',
	padding: theme.spacing(3),
	boxShadow: `${theme.shadows[9]}`,
	':hover': {
		boxShadow: `${theme.shadows[20]}`,
	}
}));

export default ServiceCardContiner;
