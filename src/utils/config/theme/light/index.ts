import { Theme, ThemeOptions, createTheme } from '@mui/material';

const lightTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'light',
			primary: {
				// main: '#D03D46',
				// main: '#EE3190',
				main: '#19376D',
			},
			secondary: {
				// main: '#0E7071',
				main: '#0B2447',
				// main: '#082A3A',
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
