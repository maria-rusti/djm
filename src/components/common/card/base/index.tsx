import React, { ReactNode } from 'react';
import { Card, styled, CardProps, Theme, useTheme } from '@mui/material';
import { Width } from '../../../../utils/types/style';

export interface CardPropsSG extends CardProps {
	width?: Width;
	height?: Width;
	children: ReactNode;
	hover?: boolean;
	shadow?: boolean;
}

const StyledCard = styled(Card, {
	shouldForwardProp: (prop) => !['width', 'height', 'resizable', 'hover', 'shadow'].includes(prop as string),
})(({ theme, hover, shadow }: { theme: Theme, hover: boolean, shadow: boolean }) => ({
	width: theme.spacing(50),
	margin: theme.spacing(2),
	height: theme.spacing(32),
	minHeight: theme.spacing(16),
	minWidth:  theme.spacing(36),
	background: `${theme.palette.background.paper}`,
	overflow: 'auto',
	boxSizing: 'border-box',
	padding: theme.spacing(3),
	'::-webkit-scrollbar-track': {
		borderRadius:  theme.spacing(0, 6, 6, 0)
	},
	...(shadow && {
		boxShadow: `${theme.shadows[9]}`,
	}),
	...(hover && {
		':hover': {
			boxShadow: `${theme.shadows[20]}`,
		}
	})
}));

/**
 *
 * @param width is used for the width of the card - optional
 * @param height is used for the height of the card - optional
 * @exampleStart
 * <Card width={500} height={300}>
 * 	<div>
 * 		<h1>Here is the title</h1>
 * 		<p>Here is the description</p>
 * 	</div>
 * </Card>
 * @exampleEnd
 * @returns a JSX.Element that represent the Card component - reusable component
 */

const CardSG: React.FC<CardPropsSG> = ({
	width,
	height,
	children,
	hover,
	shadow,
	...other
}) => {
	const theme = useTheme();

	return (
		<StyledCard
			style={{
				width,
				height
			}}
			theme={theme}
			hover={!!hover}
			shadow={!!shadow}
			{...other}
		>
			{children}
		</StyledCard>
	);
};

CardSG.defaultProps = {
	width: 400,
	height: 256,
	hover: false,
	shadow: false
};

export default CardSG;
