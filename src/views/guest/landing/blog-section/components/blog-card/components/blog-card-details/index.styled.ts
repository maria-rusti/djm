import { FC } from 'react';
import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material';

interface IBlogCardTitle extends TypographyProps {
	hovered: boolean
}

const BlogCardTitle: FC<IBlogCardTitle> = styled(Typography as FC<IBlogCardTitle>, {
	shouldForwardProp: (prop) => prop !== 'hovered',
})
(({ theme, hovered }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: '28px',
	color: hovered ? theme?.palette?.primary?.main : 'inherit',
	transition: theme.transitions.create(['all'], {
		duration: theme.transitions.duration.standard,
	}),
	[theme.breakpoints.only('xs')]: {
		fontSize: '24px',
	}
}));

const BlogCardActionContiner: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: theme.spacing(1),
	justifyContent: 'space-between',
	width: '100%',
}));

export { BlogCardTitle, BlogCardActionContiner };