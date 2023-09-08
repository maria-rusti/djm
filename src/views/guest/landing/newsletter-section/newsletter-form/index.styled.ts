import { FC } from 'react';
import { OutlinedInput, OutlinedInputProps, styled } from '@mui/material';
import { ButtonPropsSG } from '../../../../../components/common/button/base/index.interfaces';
import { ButtonSG } from '../../../../../components/common';

const StyledNewsletterInput: FC<OutlinedInputProps> = styled(OutlinedInput)(({ theme }) => ({
	background: theme.palette.background.paper,
	alignSelf: 'center',
	width: '70%',
	paddingRight: 0,
	outline: 'none',
	':hover': {
		border: 'none',
		outline: 'none'
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
		padding: theme.spacing(1),
	},
	'& .MuiOutlinedInput-input': {
		padding: 0,
		paddingLeft: theme.spacing(3),
	},

}));

interface NewsletterButtonProps extends ButtonPropsSG {
	inside?: boolean;
}

const NewsletterButton: FC<NewsletterButtonProps> = styled(ButtonSG as FC<NewsletterButtonProps>, {
	shouldForwardProp: (prop: string) => prop !== 'inside',
})(({ theme, inside }) => ({
	backgroundColor: inside ? theme.palette.primary.main : theme.palette.common.white,
	justifySelf: 'center',
	':hover': {
		backgroundColor: theme.palette.secondary.main,
		border: `3px solid ${theme.palette.secondary.main}`,
		color: theme.palette.common.white,
	},
	[theme.breakpoints.up('md')]: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		border: `3px solid ${theme.palette.common.white}`,
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
		marginTop: theme.spacing(2)
	},
}));

const NewsletterFormWrapper = styled('form')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}));

export { StyledNewsletterInput, NewsletterButton, NewsletterFormWrapper };
