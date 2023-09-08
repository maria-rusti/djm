import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

interface IBlogCardContiner extends BoxProps {
	hovered: boolean
}

const BlogCardContiner: FC<IBlogCardContiner> = styled(Box as FC<IBlogCardContiner>,{
	shouldForwardProp: (prop) => prop !== 'hovered',
})
(({ theme, hovered }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	minHeight: '300px',
	height: hovered ? '590px' : '600px',
	[theme.breakpoints.down('md')]: {
		height: '500px',
	},
	maxHeight: '600px',
	minWidth: '300px',
	width: '100%',
	maxWidth: '600px',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.paper,
	cursor: 'pointer',
	boxShadow: hovered ? theme.shadows[20] : theme.shadows[5],
	transition: 'all 0.2s ease-in-out',
}));

export { BlogCardContiner };