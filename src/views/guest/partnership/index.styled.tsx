import { FC } from 'react';
import { styled, BoxProps, Box } from '@mui/material';
import CardSG, { CardPropsSG } from '../../../components/common/card/base';

const PartnershipWrapper: FC<BoxProps> = styled(Box)(() => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	overflowY: 'auto',
	marginBottom: 0
}));

const FormWrapper: FC<CardPropsSG> = styled(CardSG)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyItems: 'center',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(3),
}));

interface StyledBoxProps extends BoxProps {
	hasSocialMediaGroup?: boolean;
}

const GroupInputsWrapper: FC<StyledBoxProps> = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'hasSocialMediaGroup',
})<StyledBoxProps>(({ theme, hasSocialMediaGroup }) => ({
	display: 'flex',
	flexDirection: 'row',
	opacity: hasSocialMediaGroup ? 1 : 0,
	visibility: hasSocialMediaGroup ? 'visible' : 'hidden',
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1),
	gap: theme.spacing(1),
	justifyContent: 'center',
	alignItems: 'center',
	transition: `
	  opacity ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut},
	  visibility ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
	width: '100%',
}));

export { PartnershipWrapper, FormWrapper, GroupInputsWrapper };
