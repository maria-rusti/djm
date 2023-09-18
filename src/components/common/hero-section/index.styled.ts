import { Box, BoxProps, Theme, Typography, TypographyProps, alpha, styled } from '@mui/material';
import { FC } from 'react';

interface IProps extends BoxProps {
	reverseGradient: boolean;
  }
  
const HeroSectionWrapper: FC<IProps> = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'reverseGradient',
})(({ reverseGradient, theme }: { reverseGradient?: boolean; theme: Theme }) => ({
	height: 'auto',
	width: '100%',
	marginTop: reverseGradient ?  theme.spacing(10) : theme.spacing(3),
	marginBottom: reverseGradient ?  theme.spacing(0) : theme.spacing(5),
	maxWidth: '100%',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'space-between',
	flexDirection: 'column',
	gap: theme.spacing(5),
	'::before': {
	  content: "''",
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: '100%',
	  height: reverseGradient ? '100%' : '20%',
	  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	  background: reverseGradient
			? `linear-gradient(to top, 
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
		  )`
			: `linear-gradient(to bottom, 
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
