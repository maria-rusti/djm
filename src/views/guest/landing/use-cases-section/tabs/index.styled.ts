import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps, styled } from '@mui/material';
import { FC } from 'react';

const StyledTabs: FC<TabsProps> = styled(Tabs)(({ theme }) => ({
	'.MuiTabs-indicator': {
		top: 0,
		color: theme.palette.primary.main,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
}));

const StyledTab: FC<TabProps> = styled(Tab)(({ theme }) => ({
	display: 'flex',
	color: theme.palette.common.white,
	[theme.breakpoints.down('md')]: {
		color: theme.palette.text.secondary,
		width: '10%',
		borderBottom: `1px solid ${theme.palette.grey[500]}`,
	},
}));

const TabsWrapper: FC<BoxProps> = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		display: 'grid',
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		placeItems: 'center',
		padding: theme.spacing(1),
	},
}));

export { StyledTabs, StyledTab, TabsWrapper };
