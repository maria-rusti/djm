import { useCallback, useEffect, useState } from 'react';

interface UseBackTopTopReturnType {
	handleScroll: () => void;
	scrollToTop: () => void;
	showButton: boolean;
}

function useBackToTop(): UseBackTopTopReturnType {
	const [showButton, setShowButton] = useState<boolean>(false);

	const handleScroll = useCallback((): void => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const windowHeight = window.innerHeight || document.documentElement.clientHeight;
		setShowButton(scrollTop > windowHeight / 2);
	}, []);

	const scrollToTop = (): void => {
		const scrollStep = -window.scrollY / (500 / 15);
		const scrollInterval = setInterval(() => {
			if (window.scrollY !== 0) {
				window.scrollBy(0, scrollStep);
			} else {
				clearInterval(scrollInterval);
			}
		}, 15);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return { handleScroll, scrollToTop, showButton };
}

export default useBackToTop;
