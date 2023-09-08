import { FC } from 'react';
import { styled } from '@mui/material';
import CardSG, { CardPropsSG } from '../../../../../components/common/card/base';

const StyledSocialCard: FC<CardPropsSG> = styled(CardSG)(({ theme }) => ({
	minHeight: `${theme.spacing(35)}!important`,
	width: `${theme.spacing(40)}!important`,
	transition: theme.transitions.create(['transform']),
	overflowY: 'hidden',
	':hover': {
		cursor: 'pointer',
		transform: 'translateY(-10px)'
	},
	[theme.breakpoints.down(1060)]: {
		width: '60%!important',
	},
	[theme.breakpoints.down('md')]: {
		width: '80%!important',
	}
}));

export { StyledSocialCard };