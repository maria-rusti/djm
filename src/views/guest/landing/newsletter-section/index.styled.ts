import { Box, BoxProps, Theme, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';


const BoxNewsletter: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: `${theme?.palette?.primary?.main}`,
	justifyContent: 'space-around',
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	maxWidth: theme.spacing(150),
	minHeight: theme.spacing(44),
	margin: theme.spacing(10),
	[theme.breakpoints.down('md')]: {
		maxWidth: theme.spacing(150),
		maxHeight: theme.spacing(19),
	},
	[theme.breakpoints.down('md')]: {
		width: 'auto',
		height: 'auto',
		maxWidth: '100%',
		maxHeight: theme.spacing(30),
	},

}));

const NewsletterImage = styled('img')(({ theme }) => ({
	width: theme.spacing(25),
	height: theme.spacing(35),
	position: 'absolute',
	objectFit: 'contain',
	left: theme.spacing(-2),
	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}));

const NewsletterContent: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	height: '100%',
	[theme.breakpoints.up('md')]: {
		paddingLeft: theme.spacing(25),
	},
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center',
		gap: theme.spacing(5),
	}
}));

interface NewsletterTextProps extends TypographyProps {
	size: 'small' | 'large'
	theme: Theme
}

const NewsletterText: FC<NewsletterTextProps> = styled(Typography, {
	shouldForwardProp: (prop) => prop !== 'size'
})(({ theme, size }: NewsletterTextProps) => ({
	color: theme.palette.common.white,
	fontSize: size === 'large' ? theme.typography.h4.fontSize : theme.typography.h5.fontSize,
	fontStyle: 'normal',
	fontWeight: size === 'large' ? '700' : '400',
	lineHeight: 'normal',
	flexWrap: 'wrap',
	width: '90%',
	[theme.breakpoints.down('md')]: {
		fontSize: theme.typography.h5.fontSize,
		textAlign: 'center',
		width: '100%',
	},
	...(size === 'small' && {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	})
}));

const NewsletterForm: FC<BoxProps> = styled(Box)(({ theme }) => ({
	width: '100%',
	maxWidth: theme.spacing(200),
	gap: theme.spacing(2),
	display: 'flex',
	flexDirection: 'row',
	height: theme.spacing(8),
	flexShrink: '0'
}));

export { BoxNewsletter, NewsletterImage, NewsletterContent, NewsletterText, NewsletterForm };