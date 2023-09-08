import './App.css';
import { FC, Suspense, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utils/config/theme';
import Views from './views';
import useThemeToggle from './hooks/use-theme-toggle';
import ThemeContext from './utils/context/theme';
import Loading from './components/common/loading';

const App: FC = () => {
	const [themeMode, toggleThemeMode] = useThemeToggle();
	const themeContext = useMemo(() => ({ themeMode, toggleThemeMode }), [themeMode, toggleThemeMode]);

	return (
		<Suspense fallback={<Loading />}>
			<ThemeProvider theme={theme[themeMode]}>
				<ThemeContext.Provider value={themeContext}>
					<CssBaseline />
					<Views />
				</ThemeContext.Provider>
			</ThemeProvider>
		</Suspense>
	);
};

export default App;
