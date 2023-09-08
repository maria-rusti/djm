import { Box, BoxProps, Toolbar, ToolbarProps, styled } from '@mui/material';
import { FC } from 'react';

const HeaderWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	width: '100%',
	paddingBottom: theme.spacing(2),
	justifyContent: 'center',
	[theme.breakpoints.up('lg')]: {
		width: theme.spacing(150)
	},
	[theme.breakpoints.down('lg')]: {
		width: '100%'
	},
	[theme.breakpoints.up('sm')]: {
		marginTop: theme?.spacing(0)
	},
	[theme.breakpoints.down('sm')]: {
		marginTop: theme?.spacing(0)
	},
	'& .MuiToolbar-root': {
		margin: theme.spacing(2)
	}
}));

const HeaderContent: FC<BoxProps & {transparent?: boolean}> = styled(Box as FC<BoxProps & {transparent?: boolean}>,
	 {shouldForwardProp: (prop) => prop !== 'transparent'})(() => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	zIndex: '99'
}));

const StyledHeaderToolbar: FC<ToolbarProps> = styled(Toolbar as FC<ToolbarProps>)(({ theme }) => ({
	width: '100%',
	height: theme.spacing(8),
	display: 'flex',
	justifySelf: 'center',
	justifyContent: 'space-between',
	color: theme.palette.common.black,
	alignItems: 'center',
}));

const DisappearOnMobile: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	alignItems: 'center',
	height: '100%',
	[theme.breakpoints.up('lg')]: {
		display: 'flex'
	},
	[theme.breakpoints.down('lg')]: {
		display: 'none'
	}
}));

export { HeaderWrapper, StyledHeaderToolbar, DisappearOnMobile, HeaderContent };