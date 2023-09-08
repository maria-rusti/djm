/* eslint-disable react/require-default-props */
import React, { ReactNode, useState } from 'react';
import { CardContent, styled, useTheme } from '@mui/material';
import CardSG, { CardPropsSG } from '../base';
import { Height, Width } from '../../../../utils/types/style';

interface ResizeableCardPropsSG extends CardPropsSG {
	width?: Width;
	height?: Height;
	resize: resizeTypes;
	children: ReactNode;
	shadow?: boolean;
}

type resizeTypes = 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';

const StyledResizeableCardSG = styled(CardSG, {
	shouldForwardProp: (prop) => prop !== 'resize',
})(({ resize }: { resize: resizeTypes }) => ({
	boxSizing: 'border-box',
	resize,
}));

/**
 *
 * @param width is used for the width of the card - optional
 * By default width is 240px
 * @param height is used for the height of the card - optional
 * By default height is 240px
 * @param resize is used if the card can be resizable - optional
 * @exampleStart
 * <Card width={500} height={300} resize='both'>
 *  <div>
 *      <h1>Here is the title</h1>
 *      <p>Here is the description</p>
 *  </div>
 * </Card>
 * @exampleEnd
 * @returns a JSX.Element that represent the Card component - reusable component
 */

const ResizeableCardSG: React.FC<ResizeableCardPropsSG> = ({ width, height, resize, children, shadow }) => {
	const theme = useTheme();
	const [cardWidth, setCardWidth] = useState<Width>(width || theme.spacing(30));
	const [cardHeight, setCardHeight] = useState<Height>(height || theme.spacing(30));

	const style = {
		width: cardWidth ? `${cardWidth}px` : undefined,
		height: cardHeight ? `${cardHeight}px` : undefined,
		resize,
	};

	const handleResize = (e: React.MouseEvent<HTMLDivElement>): void => {
		if (resize) {
			setCardWidth(e.currentTarget.offsetWidth);
			setCardHeight(e.currentTarget.offsetHeight);
		}
	};

	return (
		<StyledResizeableCardSG style={style} onMouseUp={handleResize}
			onMouseLeave={handleResize} resize={resize} shadow={shadow}>
			<CardContent>{children}</CardContent>
		</StyledResizeableCardSG>
	);
};

export default ResizeableCardSG;
