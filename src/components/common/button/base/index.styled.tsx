import { Theme, Button, styled, ButtonProps } from '@mui/material';
import { FC } from 'react';

export interface IStyledButtonSG extends ButtonProps {
	theme?: Theme; 
	shadow: boolean; 
	hover: boolean 
}

const StyledButtonSG: FC<IStyledButtonSG> = styled(Button as FC<IStyledButtonSG>, {
	shouldForwardProp: (prop) => !['shadow', 'hover'].includes(prop as string),
})(({ theme, shadow, hover }) => ({
	maxWidth: theme?.spacing(40),
	maxHeight: theme?.spacing(10),
	minHeight: theme?.spacing(6),
	minWidth: theme?.spacing(5),
	fontSize: theme?.typography.body1.fontSize,
	fontWeight: theme?.typography?.fontWeightBold,
	backgroundColor: theme?.palette.common.white,
	textTransform: 'none',
	overflow: 'auto',
	boxSizing: 'border-box',
	boxShadow: shadow ? `${theme?.shadows[9]}` : `${theme?.shadows[0]}`,
	borderRadius: theme?.shape.borderRadius,
	transition: 'transform 0.3s ease',
	':hover': {
		boxShadow: shadow ? `${theme?.shadows[9]}` : `${theme?.shadows[0]}`,
		backgroundColor: theme?.palette.common.white,
		...(hover && {
			transform: 'scale(0.95)',
		}),
	},
}));

export { StyledButtonSG };
