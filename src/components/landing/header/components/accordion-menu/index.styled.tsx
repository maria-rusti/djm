import { Accordion, AccordionProps, AccordionSummary as MUIAccordionSummary, styled } from '@mui/material';

const NavAccordion: React.FC<AccordionProps> = styled(Accordion)(({ theme }) => ({
	borderRadius: 0,
	fontSize: theme.spacing(2),
	color: theme.palette.common.black,
	padding: theme.spacing(1),
	marginTop: theme.spacing(2),
	marginBottom: 0,
	textTransform: 'none',
	textDecoration: 'none',
	'&: hover': {
		color: theme.palette.primary.main,
	},
}));

const AccordionSummary = styled(MUIAccordionSummary)(({ theme }) => ({
	flexDirection: 'row-reverse',
	gap: theme.spacing(1),
}));

export { NavAccordion, AccordionSummary };