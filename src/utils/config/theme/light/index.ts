import { Theme, ThemeOptions, createTheme } from '@mui/material';

const lightTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'light',
			primary: {
				main: '#B63E56',
			},
			secondary: {
				main: '#0E3666',
			},
			common: {
				black: '#2B2934',
				white: '#F6FAF8'
			},
			background: {
				default: '#FFFFFF',
				paper: '#F6FAF8',
			},
			text: {
				primary: '#2B2934',
				secondary: '#696969',
			},
		},
	});

export default lightTheme;
