import { FC, ReactElement, useMemo } from 'react';
import MusicContext from './utils/context/video';
import MusicRenderer from './components/common/music-render';
import useMusic from './hooks/use-music';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

interface IProps {
	children: ReactElement;
}

const NavigationScroll: FC<IProps> = (props: IProps) => {
	const { play, music } = useMusic();
	const musicContext = useMemo(() => ({ play }), [play]);


	return (
		<>
			<MusicContext.Provider value={musicContext}>{props?.children || ''}</MusicContext.Provider>
			<MusicRenderer music={music} />
		</>
	);
};

export default NavigationScroll;
