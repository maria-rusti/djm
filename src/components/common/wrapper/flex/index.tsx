import { styled, Box, BoxProps } from '@mui/material';
import { FC, ElementType } from 'react';

const extendedProps = ['column', 'justifyCenter', 'justifyEnd', 'alignStart', 'alignEnd', 'justifyBetween'];

type FlexElementType = ElementType<any> | undefined;

export interface FlexProps extends Omit<BoxProps, 'display'> {
	column?: boolean;
	justifyCenter?: boolean;
	justifyEnd?: boolean;
	alignStart?: boolean;
	alignEnd?: boolean;
	component?: FlexElementType;
	justifyBetween?: boolean;
}

const Flex: FC<FlexProps> = styled(Box as FC<FlexProps>, {
	shouldForwardProp: (prop: string) => !extendedProps.includes(prop),
})(
	({
		column = false,
		justifyCenter = false,
		justifyEnd = false,
		alignStart = false,
		alignEnd = false,
		justifyBetween = false,
	}) => ({
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: column ? 'column' : 'row',
		justifyContent: justifyCenter
			? 'center'
			: (justifyEnd && 'flex-end') || (justifyBetween && 'space-between') || 'flex-start',
		// eslint-disable-next-line no-nested-ternary
		alignItems: alignStart ? 'flex-start' : alignEnd ? 'flex-end' : 'center',
	})
);

export default Flex;
