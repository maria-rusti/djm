import { Box, BoxProps, Link, LinkProps, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const SocialsWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexWrap: 'wrap',
	width: '100%',
	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
	},
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
	gap: 3,
	padding: theme.spacing(1),
	mx: 3,
}));

const SocialIconWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

const ClickableText: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	cursor: 'pointer',
	fontSize: '1rem',
}));

const StyledIconButton: FC<LinkProps> = styled(Link as FC<LinkProps>)(({ theme }) => ({
	color: theme.palette.primary.main,
	width: theme.spacing(5),
	height: theme.spacing(5),
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	transition: theme.transitions.create(['backgroundColor', 'color', 'elevation']),
	':hover': {
		backgroundColor: '#fff',
		color: `${theme.palette.primary.dark}`,
		elevation: 2,
	},
}));

const SocialsLinksWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
}));

export { SocialsWrapper, ClickableText, StyledIconButton, SocialIconWrapper, SocialsLinksWrapper };
