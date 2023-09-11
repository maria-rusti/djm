import { createContext } from 'react';

export interface MusicContextType {
	play: (musicPlay: string) => void;
}

const MusicContext = createContext<MusicContextType>({
	play: () => {},
});

export default MusicContext;
