import { Icon } from '@iconify/react';
import { Box, BoxProps, styled } from '@mui/material';
import { FC } from 'react';

const StyledIcon = styled(Icon)(({ theme }) => ({
	width: theme.spacing(5),
	height: theme.spacing(5),
	marginLeft: theme.spacing(4),
}));

const IconWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(() => ({
	display: 'flex',
	width: 'auto',
}));

const PaymentWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'center',
	maxWidth: theme.spacing(187),
	minHeight: theme.spacing(12),
	padding: theme.spacing(4),
	borderRadius: theme.spacing(2),
	position: 'absolute',
	top: theme.spacing(-10),
	gap: theme.spacing(1),
	backgroundColor: theme.palette.background.paper,
	border: `2px solid ${theme.palette.primary.main}`,
	[theme.breakpoints.down(1410)]: {
		display: 'none'
	},
}));

export { StyledIcon, IconWrapper, PaymentWrapper };
