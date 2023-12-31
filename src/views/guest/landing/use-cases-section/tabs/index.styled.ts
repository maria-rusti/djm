import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps, styled } from '@mui/material';
import { FC } from 'react';

const StyledTabs: FC<TabsProps> = styled(Tabs)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	'.MuiTabs-indicator': {
	  top: 0,
	  color: theme.palette.primary.main,
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent: 'center',
	  [theme.breakpoints.down('md')]: {
			display: 'none',
	  },
	  '&.scrolling': {
			animation: '$scrollTabs 10s linear infinite',
			whiteSpace: 'nowrap',
			overflowX: 'auto',
	  },
	  '@keyframes scrollTabs': {
			'0%': {
		  transform: 'translateX(0)',
			},
			'100%': {
		  transform: 'translateX(-100%)',
			},
	  },
	  width: 'fit-content',
	  animation: 'slideLeft 50s linear infinite',
	},
	overflowX: 'scroll',
	WebkitOverflowScrolling: 'touch',
	position: 'relative',
	flexDirection: 'row',
	'@media (min-width: 601px)': {
	  '& .MuiTabs-indicator.scrolling': {
			animation: 'scrollTabs 10s linear infinite', 
	  },
	},
}));

const StyledTab: FC<TabProps> = styled(Tab)(({ theme }) => ({
	display: 'flex',
	color: theme.palette.common.white,
	[theme.breakpoints.down('md')]: {
		color: theme.palette.text.secondary,
		width: '50%',
		borderBottom: `1px solid ${theme.palette.grey[500]}`,
	},
}));

const TabsWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	width: '60%',
	[theme.breakpoints.down('md')]: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		padding: theme.spacing(1),
	},
}));

export { StyledTabs, StyledTab, TabsWrapper };
