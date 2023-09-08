import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

export const ServicesTitle: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	textAlign: 'center',
	'&::first-letter': {
		textTransform: 'capitalize',
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: theme.typography.h2.fontSize,
		padding: 0
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: theme.typography.h3.fontSize,
		lineHeight: 1,
		padding: `0 ${theme.spacing(1)}`
	}
}));


export const ServicesSubtitle: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	width: '100%',
	color: '#696969',
	alignItems: 'center',
	'&::first-letter': {
		textTransform: 'capitalize',
	},
	[theme.breakpoints.up('sm')] : {
		textAlign: 'start',
		padding: 0
	},
	[theme.breakpoints.down('sm')]: {
		textAlign: 'center',
		padding: theme.spacing(1)
	}
}));