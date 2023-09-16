import './App.css';
import { FC, Suspense, useCallback, useMemo, useRef, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utils/config/theme';
import Views from './views';
import useThemeToggle from './hooks/use-theme-toggle';
import ThemeContext from './utils/context/theme';
import Loading from './components/common/loading';
import MusicContext from './utils/context/video';
import MusicRenderer from './components/common/music-render';

const App: FC = () => {
	const [themeMode, toggleThemeMode] = useThemeToggle();
	const themeContext = useMemo(() => ({ themeMode, toggleThemeMode }), [themeMode, toggleThemeMode]);
	const [music, setMusic] = useState<string>('');
	const isPlayingRef = useRef(false);
	const currentMusicNameRef = useRef<string>('');

	const play = useCallback((musicName: string) => {
		if (!isPlayingRef.current || currentMusicNameRef.current !== musicName) {
			setMusic(musicName);
			currentMusicNameRef.current = musicName;
			isPlayingRef.current = true;
		}
	}, []);
	const musicContext = useMemo(() => ({ play }), [play]);
	return (
		<MusicContext.Provider value={musicContext}>
			<Suspense fallback={<Loading />}>
				<MusicRenderer music={music} setMusic={setMusic} />
				<ThemeProvider theme={theme[themeMode]}>
					<ThemeContext.Provider value={themeContext}>
						<CssBaseline />
						<Views />
					</ThemeContext.Provider>
				</ThemeProvider>
			</Suspense>
		</MusicContext.Provider>
	);
};

export default App;
