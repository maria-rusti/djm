import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const HeadingText: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	wordBreak: 'break-word',
	textAlign: 'center',
	fontWeight: theme.typography.fontWeightBold,
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.h4.fontSize
	},
	[theme.breakpoints.down('md')]: {
		fontSize: theme.typography.h5.fontSize
	},
}));

export { HeadingText };