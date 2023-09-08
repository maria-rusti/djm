import { FC } from 'react';
import { Icon, IconProps } from '@iconify/react';
import { Button, styled } from '@mui/material';
import { GetStartedButtonProps } from './index.interface';

interface GetStartedButtonArrowProps extends IconProps {
	hover: boolean
}

export const StyledGetStartedButtonArrow: FC<GetStartedButtonArrowProps> =
	styled(Icon as FC<GetStartedButtonArrowProps>, {
		shouldForwardProp: (prop: string) => prop !== 'hover',
	})(({ theme, hover }) => ({
		transition: theme.transitions.create(['transform']),
		marginLeft: '10px',
		...(hover && {
			transform: 'translateX(10px)'
		})
	}));

export const StyledGetStartedButton: FC<GetStartedButtonProps> = styled(Button as FC<GetStartedButtonProps>, {
	shouldForwardProp: (prop: string) => prop !== 'white',
})(({ theme, white }) => ({
	maxWidth: theme?.spacing(40),
	maxHeight: theme?.spacing(10),
	minHeight: theme?.spacing(6),
	minWidth: theme?.spacing(20),
	fontSize: theme?.typography.body1.fontSize,
	fontWeight: theme?.typography?.fontWeightBold,
	textTransform: 'none',
	overflow: 'auto',
	boxSizing: 'border-box',
	boxShadow: `${theme?.shadows[9]}`,
	borderRadius: theme?.shape.borderRadius,
	transition: 'transform 0.3s ease',
	':hover': {
		color: !white ? theme.palette.common.white : theme.palette.primary.main,
		boxShadow: `${theme?.shadows[9]}`,
		transform: 'scale(0.95)',
		backgroundColor: white ? theme.palette.common.white : theme.palette.primary.main,
	},
	backgroundColor: white ? theme.palette.common.white : theme.palette.primary.main,
	color: !white ? theme.palette.common.white : theme.palette.primary.main,
}));
