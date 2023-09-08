import { styled, Card, OutlinedInput, SelectProps, Select, Box } from '@mui/material';
import { FC } from 'react';
import { CardPlatform, InputSearchProps } from './index.interfaces';


export const FaqWrapper = styled(Box)(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
}));

export const StyledCardPlatform: FC<CardPlatform> = styled(Card as FC<CardPlatform>, {
	shouldForwardProp: (prop: string) => prop !== 'selected',
})(({ theme, selected }) => ({
	width: '100%',
	margin: '10px',
	cursor: 'pointer',
	display: 'flex',
	padding: '10%',
	border: `${theme.palette.common.black} solid 1px`,
	boxShadow: selected ? theme.shadows : theme.shadows[0],
	'&:hover': {
		boxShadow: theme.shadows,
	},
}));
export const InputSearch: FC<InputSearchProps> = styled(OutlinedInput as FC<InputSearchProps>, {
	shouldForwardProp: (prop: string) => prop !== 'mobileWidth',
})(({ mobileWidth }) => ({
	borderTopLeftRadius: !mobileWidth ? '80px 80px' : '20px 20px',
	borderBottomLeftRadius: !mobileWidth ? '80px 80px' : '20px 20px',
	borderTopRightRadius: !mobileWidth ? '0px 0px' : '20px 20px',
	borderBottomRightRadius: !mobileWidth ? '0px 0px' : '20px 20px',
}));
export const InputSelectPlatform: FC<SelectProps> = styled(Select)(() => ({
	borderTopRightRadius: '80px 80px',
	borderBottomRightRadius: '80px 80px',
	borderTopLeftRadius: '0px 0px',
	borderBottomLeftRadius: '0px 0px',
}));
