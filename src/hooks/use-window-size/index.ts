import { useLayoutEffect, useState } from 'react';
import { useEventListener } from '../use-event-listener';

interface WindowSize {
  width: number
  height: number
}

export function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
	});

	const handleSize = (): void => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEventListener('resize', handleSize);

	useLayoutEffect(() => {
		handleSize();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return windowSize;
}