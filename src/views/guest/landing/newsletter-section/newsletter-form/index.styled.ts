import { FC } from 'react';
import { OutlinedInput, OutlinedInputProps, TextField, styled } from '@mui/material';
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
const StyledNewsletterSelect = styled(TextField)(({ theme }) => ({
	background: theme.palette.background.paper,
	borderTopLeftRadius: '32px 32px',
	borderBottomLeftRadius: '32px 32px',
	borderTopRightRadius: '32px 32px',
	borderBottomRightRadius: '32px 32px',
	width: '100%',
	height: '100%',
	outline: 'none',
	':hover': {
		border: 'none',
		outline: 'none'
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
	'& .MuiOutlinedInput-input': {
		padding: 0,
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
	width: '100%',
	marginTop: theme.spacing(2),
	':hover': {
		backgroundColor: theme.palette.secondary.main,
		border: `3px solid ${theme.palette.secondary.main}`,
		color: theme.palette.common.white,
	}
}));

const NewsletterFormWrapper = styled('form')(() => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center',
}));

export { StyledNewsletterInput, NewsletterButton, NewsletterFormWrapper, StyledNewsletterSelect };
