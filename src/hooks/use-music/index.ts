import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import MusicContext, { MusicContextType } from '../../utils/context/video';

interface UseMusicReturnType extends MusicContextType {
	setMusic: Dispatch<SetStateAction<string>>;
	music: string;
}

export function useMusicContext(): MusicContextType {
	return useContext(MusicContext);
}

function useMusic(): UseMusicReturnType {
	const [music, setMusic] = useState<string>(() => {
		// Încercați să obțineți muzica din local storage la încărcarea componentei
		const storedMusic = localStorage.getItem('music');
		return storedMusic || '';
	});
	const isPlayingRef = useRef(false);
	const currentMusicNameRef = useRef<string>('');

	useEffect(() => {
		// Salvarea stării muzicii în local storage la fiecare actualizare
		localStorage.setItem('music', music);
	}, [music]);

	const play = useCallback((musicName: string) => {
		if (!isPlayingRef.current || currentMusicNameRef.current !== musicName) {
			setMusic(musicName);
			currentMusicNameRef.current = musicName;
			isPlayingRef.current = true;
		}
	}, []);

	const stop = useCallback(() => {
		setMusic('');
		currentMusicNameRef.current = '';
		isPlayingRef.current = false;
	}, []);

	return useMemo(
		() => ({
			music,
			play,
			stop,
			setMusic
		}),
		[music, play, stop]
	);
}

export default useMusic;
