import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

interface IServicesCardTitle extends TypographyProps {
	hovered: boolean
}

export const ServicesCardTitle: FC<IServicesCardTitle> = styled(Typography as FC<IServicesCardTitle>, {
	shouldForwardProp: (prop) => prop !== 'hovered',
})
(({ theme, hovered }) => ({
	fontSize: theme.typography.h5.fontSize,
	fontWeight: 500,
	userSelect: 'none',
	color: hovered ? theme.palette.primary.main : 'inherit',
}));