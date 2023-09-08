import { FC } from 'react';
import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material';

const BlogDetailsWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }) => ({
	display: 'flex',
	alignItems: 'end',
	justifyContent: 'space-between',
	width: '100%',
	minHeight: '60px',
	maxWidth: theme.spacing(150),
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		alignItems: 'center',
		gap: theme.spacing(4)
	}
}));

const BlogTextWrapper:  FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	maxWidth: '500px',
	textAlign: 'start',
	fontSize: theme.spacing(5),
	fontWeight: 600,
	paddingInline: theme.spacing(1),
	'::first-line ': {
		color: theme.palette.common.white
	},
	[theme.breakpoints.down('md')]: {
		textAlign: 'center'
	}
}));

export { BlogDetailsWrapper, BlogTextWrapper };