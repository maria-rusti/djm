import { Box, BoxProps, Button, ButtonProps, Typography, TypographyProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

interface SocialsPageSectionWrapper extends BoxProps {
	clipPath?: boolean
}

const SocialsPageSectionWrapper: FC<SocialsPageSectionWrapper> =
	styled(Box as FC<SocialsPageSectionWrapper>)(({ theme, clipPath }) => ({
		backgroundColor: theme.palette.background.default,
		borderRadius: theme.shape.borderRadius,
		width: theme.spacing(105),
		padding: theme.spacing(5),
		border: `2px solid ${theme.palette.grey[200]}`,
		[theme.breakpoints.down('md')]: {
			width: '92%',
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(3),
		},
		...(clipPath && {
			':before': {
				content: '\'\'',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '200%',
				clipPath: 'polygon(0% 100%, 100% 70%, 100% 30%, 0 0)',
				backgroundColor: alpha(theme.palette.primary.main, 0.5),
				zIndex: -1
			}
		})
	}));

const SocialsPageHeading: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	fontSize: theme.typography.h5.fontSize,
	fontWeight: 'bold',
	marginBottom: theme.spacing(5),
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(3),
		fontSize: theme.typography.h6.fontSize,
	},
}));

const SocialsPageTitle: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	fontSize: theme.typography.h4.fontSize,
	fontWeight: 'bold',
	marginBottom: theme.spacing(5),
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(3),
		fontSize: theme.typography.h5.fontSize,
	},
}));

const SocialsPageImage = styled('img')(({ theme }) => ({
	width: '100%',
	marginBottom: theme.spacing(5),
	borderRadius: theme.shape.borderRadius,
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(3),
	},
}));

const SocialsPageDescription: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[600],
	fontSize: 18,
	marginBottom: theme.spacing(5),
	whiteSpace: 'pre-line',
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(3),
	},
}));

const SocialsPageButton: FC<ButtonProps> = styled(Button)(({ theme }) => ({
	minHeight: theme?.spacing(6),
	minWidth: theme?.spacing(25),
	fontSize: theme?.typography.body1.fontSize,
	fontWeight: theme?.typography?.fontWeightBold,
	backgroundColor: theme?.palette.primary.main,
	color: theme.palette.common.white,
	textTransform: 'none',
	overflow: 'auto',
	boxSizing: 'border-box',
	boxShadow: `${theme?.shadows[9]}`,
	borderRadius: theme?.shape.borderRadius,
	transition: 'transform 0.3s ease',
	':hover': {
		boxShadow: `${theme?.shadows[9]}`,
		backgroundColor: theme?.palette.primary.main,
		transform: 'scale(0.95)',
	},
}));

export {
	SocialsPageSectionWrapper,
	SocialsPageHeading,
	SocialsPageImage,
	SocialsPageDescription,
	SocialsPageButton,
	SocialsPageTitle
};