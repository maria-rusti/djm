import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps, Theme, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';
import CardSG, { CardPropsSG } from '../../../../../components/common/card/base';

interface IStyledProps {
	theme: Theme,
	hover?: boolean
};

interface IconBackgroundProps extends BoxProps {
	hover?: boolean,
};

const IconBackground: FC<IconBackgroundProps> = styled(Box as FC<IconBackgroundProps>, {
	shouldForwardProp: (prop: string) => prop !== 'hover',
})(({ theme, hover = false }: IStyledProps) => ({
	backgroundColor: '#E1E4FF',
	width: theme.spacing(8),
	height: theme.spacing(8),
	borderRadius: theme.shape.borderRadius,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	transition: theme.transitions.create(['transform']),
	...(hover && {
		transform: 'scale(1.1)'
	})
}));

interface HeadingTextProps extends TypographyProps {
	hover: boolean
};

const HeadingText: FC<HeadingTextProps> = styled(Typography as FC<HeadingTextProps>, {
	shouldForwardProp: (prop: string) => prop !== 'hover',
})(({ theme, hover }: IStyledProps) => ({
	fontSize: theme.typography.h5.fontSize,
	fontWeight: 'bold',
	transition: theme.transitions.create(['transform', 'color']),
	...(hover && {
		transform: 'translateY(-3px)',
		color: theme.palette.primary.main
	})
}));

interface HoverIconProps extends IconProps {
	hover: boolean
};

const HoverIcon: FC<HoverIconProps> = styled(Icon as FC<HoverIconProps>, {
	shouldForwardProp: (prop: string) => prop !== 'hover',
})(({ theme, hover }: IStyledProps) => ({
	width: theme.spacing(5),
	height: theme.spacing(5),
	color: theme.palette.primary.light,
	transition: theme.transitions.create(['color']),
	...(hover && {
		color: theme.palette.primary.main,
	})
}));

const SolutionCardSubtitle: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	color: theme.palette.text.secondary
}));

const StyledSolutionCard: FC<CardPropsSG> = styled(CardSG)(({ theme }) => ({
	height: `${theme.spacing(50)}!important`,
	width: `${theme.spacing(34)}!important`,
	transition: theme.transitions.create(['transform']),
	':hover': {
		cursor: 'pointer',
		transform: 'translateY(-10px)'
	},
}));

export { IconBackground, HeadingText, HoverIcon, SolutionCardSubtitle, StyledSolutionCard };