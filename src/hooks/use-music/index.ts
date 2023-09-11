import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import MusicContext, { MusicContextType } from '../../utils/context/video';

interface UseMusicReturnType extends MusicContextType {
  music: string;
}

export enum notifify {
  play,
}

export function useMusicContext(): MusicContextType {
	return useContext(MusicContext);
}

function useMusic(): UseMusicReturnType {
	const [music, setMusic] = useState<string>('');
	const isPlayingRef = useRef(false);
	const currentMusicNameRef = useRef<string>('');

	const play = useCallback((musicName: string) => {
		if (!isPlayingRef.current) {
			if (currentMusicNameRef.current !== musicName) {
				setMusic(musicName);
				currentMusicNameRef.current = musicName;
			}
			isPlayingRef.current = true;
		}
	}, [setMusic]);

	return useMemo(
		() => ({
			music,
			play,
		}),
		[music, play]
	);
}

export default useMusic;
