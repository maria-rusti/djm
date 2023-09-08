import { Box, BoxProps, Typography, TypographyProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

const HeroSectionWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	height: 'auto',
	marginTop: theme.spacing(3),
	marginBottom: theme.spacing(5),
	maxWidth: theme.spacing(75),
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: theme.spacing(5),
	':before': {
		content: "''",
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '50%',
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		background: `linear-gradient(to bottom, 
			${alpha(theme.palette.secondary.main, 0.6)} 0%,
			${alpha(theme.palette.secondary.main, 0.57)} 5%,
			${alpha(theme.palette.secondary.main, 0.55)} 10%,
			${alpha(theme.palette.secondary.main, 0.52)} 15%,
			${alpha(theme.palette.secondary.main, 0.5)} 20%, 
			${alpha(theme.palette.secondary.main, 0.45)} 25%, 
			${alpha(theme.palette.secondary.main, 0.4)} 30%, 
			${alpha(theme.palette.secondary.main, 0.35)} 35%, 
			${alpha(theme.palette.secondary.main, 0.3)} 40%,
			${alpha(theme.palette.secondary.main, 0.25)} 50%, 
			${alpha(theme.palette.secondary.main, 0.2)} 60%, 
			${alpha(theme.palette.secondary.main, 0.15)} 70%,
			${alpha(theme.palette.secondary.main, 0.1)} 80%,
			${alpha(theme.palette.secondary.main, 0.0)} 100%, 
			${theme.palette.background.default} 100%
		)`,
		zIndex: -1,
	},
}));

const StyledTitle: FC<TypographyProps> = styled(Typography)(({ theme }) => ({
	fontSize: theme.typography.h2.fontSize,
	[theme.breakpoints.down('md')]: {
		fontSize: theme.typography.h4.fontSize,
	},
}));

export { HeroSectionWrapper, StyledTitle };
