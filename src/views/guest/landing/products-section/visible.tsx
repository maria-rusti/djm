import { useState, useEffect, MutableRefObject } from 'react';

const OPTIONS = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

const useIsVisible = (elementRef: MutableRefObject<Element | undefined>): boolean => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (elementRef.current) {
			const observer = new IntersectionObserver((entries, observerParam) => {
				entries.forEach((entry) => {
					if (elementRef?.current && entry.isIntersecting) {
						setIsVisible(true);
						observerParam.unobserve(elementRef.current);
					}
				});
			}, OPTIONS);
			observer.observe(elementRef.current);
		}
	}, [elementRef]);

	return isVisible;
};

export default useIsVisible;