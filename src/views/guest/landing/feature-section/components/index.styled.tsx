import { FC } from 'react';
import { Grid, GridProps, Typography, TypographyProps, styled } from '@mui/material';
import { Icon, IconProps } from '@iconify/react';

interface CommonProps {
	small?: boolean;
	hover?: boolean;
	landing?: 1 | 0;
}

const commonProps = ['small', 'hover'];

const StyledFeatureTitle: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	maxWidth: theme.spacing(90),
	textAlign: 'center',
	fontSize: theme.spacing(5),
	fontWeight: 600,
	marginBottom: theme.spacing(8),
	[theme.breakpoints.down('sm')]: {
		marginBottom: theme.spacing(1),
	},
	paddingInline: theme.spacing(1),
	'::first-line ': {
		color: theme.palette.primary.light,
	},
}));

interface StyledIconProps extends CommonProps, IconProps {}

const StyledIcon: FC<StyledIconProps> = styled(Icon as FC<StyledIconProps>, {
	shouldForwardProp: (propName: string): boolean => !commonProps.includes(propName),
})(({ theme, small }) => ({
	width: small ? theme.spacing(5) : theme.spacing(7),
	height: small ? theme.spacing(5) : theme.spacing(7),
	color: theme.palette.primary.light,
}));

interface FeatureCardContinerProps extends CommonProps, GridProps {}

const FeatureCardContiner: FC<FeatureCardContinerProps> = styled(Grid as FC<FeatureCardContinerProps>, {
	shouldForwardProp: (propName: string): boolean => !commonProps.includes(propName),
})(({ theme, small }) => ({
	display: 'flex',
	flexDirection: 'row',
	padding: theme.spacing(1),
	gap: theme.spacing(3),
	alignSelf: 'start',
	justifySelf: 'start',
	borderRadius: theme.shape.borderRadius,
	[theme.breakpoints.down('md')]: {
		display: 'flex',
		justifyContent: 'center',
	},
	[theme.breakpoints.down('sm')]: {
		marginLeft: theme.spacing(0.6),
	},
	transition: theme.transitions.create(['background-color']),
	// ':hover': {
	// 	backgroundColor: landing ? alpha(theme.palette.common.black, 0.9) : alpha(theme.palette.secondary.light, 0.5),
	// 	...(small && {
	// 		cursor: 'pointer',
	// 	}),
	// },
	...(small && {
		maxWidth: theme.spacing(40),
	}),
}));

interface StyledtypographyProps extends CommonProps, TypographyProps {}

const FeatureCardTitle: FC<StyledtypographyProps> = styled(Typography as FC<StyledtypographyProps>, {
	shouldForwardProp: (propName: string): boolean => !commonProps.includes(propName),
})(({ theme, small, hover, landing }) => ({
	fontSize: theme.spacing(small ? 2 : 3),
	color: landing ? theme?.palette?.common.white : theme.palette.text.primary,
	fontWeight: theme?.typography?.fontWeightBold,
	transition: theme.transitions.create(['transform', 'color']),
	...(hover && {
		transform: 'scale(1.1)',
		color: landing ? theme?.palette?.common.white : theme.palette.primary.main,
	}),
}));

const FeatureCardSubtitle: FC<StyledtypographyProps> = styled(Typography as FC<StyledtypographyProps>, {
	shouldForwardProp: (propName: string): boolean => !commonProps.includes(propName),
})(({ theme, small, hover, landing }) => ({
	color: landing ? theme?.palette?.common.white : theme?.palette?.text?.secondary,
	transition: theme.transitions.create(['transform', 'color']),
	...(hover && {
		color: landing ? theme?.palette?.common.white : theme?.palette?.text?.primary,
		transform: 'scale(1.05)',
	}),
	...(small && {
		fontSize: theme.typography.subtitle2.fontSize,
	}),
}));

export { StyledFeatureTitle, FeatureCardContiner, StyledIcon, FeatureCardTitle, FeatureCardSubtitle };
