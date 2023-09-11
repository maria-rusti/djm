import { FC } from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const SectionTitleTypho: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	maxWidth: '700px',
	[theme.breakpoints.down('sm')]: {
		marginBottom: theme.spacing(1),
		fontSize: theme.spacing(3.5),
	},
}));

const SectionTitleDistinctSG = styled('span')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	color: theme.palette.primary.main,
	display: 'flex',
	alignSelf: 'flex-start',
}));

export { SectionTitleTypho, SectionTitleDistinctSG };
