import { Theme, ThemeOptions, createTheme } from '@mui/material';

const lightTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'light',
			primary: {
				main: '#150050',
				// main: '#E90064',
				// main: '#D21312',
			},
			secondary: {
				main: '#3F0071',
				// main: '#070A52',
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
				primary: '#000000',
				secondary: '#696969',
			},
		},
	});

export default lightTheme;
