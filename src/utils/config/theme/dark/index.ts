import { Theme, ThemeOptions, createTheme } from '@mui/material';

const darkTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'dark',
			primary: {
				main: '#B63E56',
			},
			secondary: {
				main: '#0E3666',
			},
			common: {
				black: '#2B2934',
				white: '#F6FAF8',
			},
			background: {
				default: '#FFFFFF',
				paper: '#696969',
			},
			text: {
				primary: '#F6FAF8',
				secondary: '#696969',
			},
		},
	});

export default darkTheme;
