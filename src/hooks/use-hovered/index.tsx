import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseHoverReturnType {
	hovered: boolean;
	elementRef: MutableRefObject<HTMLElement | null>
}

export const useHover = (): UseHoverReturnType => {
	const [hovered, setHovered] = useState<boolean>(false);
	const elementRef: MutableRefObject<HTMLElement | null> = useRef(null);

	const handleMouseEnter = useCallback((): void => setHovered(true), []);
	const handleMouseLeave = useCallback((): void => setHovered(false), []);

	useEffect(() => {
		const target = elementRef.current;
		if (target) {
			target.addEventListener('mouseenter', handleMouseEnter);
			target.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				target.removeEventListener('mouseenter', handleMouseEnter);
				target.removeEventListener('mouseleave', handleMouseLeave);
			};
		}

		// Return a no-op function if target is falsy
		return () => { };
	}, [elementRef, handleMouseEnter, handleMouseLeave]);

	return { hovered, elementRef };
};
