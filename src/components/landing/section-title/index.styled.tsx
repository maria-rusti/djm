import { FC } from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const SectionTitleTypho: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	maxWidth: '700px',
	[theme.breakpoints.down('sm')]: {
		marginBottom: theme.spacing(1),
		fontSize: theme.spacing(3.5),
	},
}));

const SectionTitleDistinctSG = styled('span')
(({ theme }) => ({
	position: 'relative',
	color: theme.palette.primary.main
}));

export { SectionTitleTypho, SectionTitleDistinctSG };