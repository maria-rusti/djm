import { useCallback, useContext } from 'react';
import useLocalStorage from '../use-local-storage';
import ThemeContext, { ThemeContextType, themeMode } from '../../utils/context/theme';

function useThemeContext(): ThemeContextType {
	return useContext(ThemeContext);
}

function useThemeToggle(): readonly [theme: themeMode, toggle: () => void] {
	const [theme, setTheme] = useLocalStorage<themeMode>('light');

	const toggleTheme = useCallback(() => 
		setTheme((prev: themeMode | null) => (prev === 'dark' ? 'light' : 'dark')), [setTheme]);

	return [theme ?? 'light', toggleTheme] as const;
}

export { useThemeContext };
export default useThemeToggle;
