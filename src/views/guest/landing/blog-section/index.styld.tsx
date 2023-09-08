import { Box, BoxProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

const BlogSectionWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '800px',
	width: '100%',
	position: 'relative',
	padding: theme.spacing(30, 0),
	gap: theme.spacing(8),
	[theme.breakpoints.down('lg')] : {
		paddingInline: theme.spacing(2),
	},
	'::before': {
		content: '\'\'',
		position: 'absolute',
		top: 0,
		clipPath: 'polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)',
		backgroundColor: alpha(theme.palette.secondary.main, 0.5),
		width: '100%',
		height: '100%',
		zIndex: '-1',
		[theme.breakpoints.down('sm')] : {
			clipPath: 'polygon(0 2%, 100% 0%, 100% 98%, 0% 100%)',
		}
	}
}));

const BlogContentContiner: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }) => ({
	display: 'flex',
	alignItems: 'start',
	justifyContent: 'center',
	minHeight: '600px',
	width: '100%',
	maxWidth: theme?.spacing(150),
	gap: theme.spacing(8),
	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(4),
	},
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		alignItems: 'center',
		gap: theme.spacing(10),
	},
}));

export { BlogSectionWrapper, BlogContentContiner };
