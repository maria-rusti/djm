import { RefObject, useEffect, useLayoutEffect, useRef } from 'react';

type CleanupFunction = () => void;

function useEventListener<
	K extends keyof WindowEventMap,
	T extends HTMLElement | MediaQueryList | Window = HTMLElement,
>(
	eventName: K,
	handler: (event: WindowEventMap[K] | Event) => void,
	element?: RefObject<T>,
	options?: boolean | AddEventListenerOptions
): CleanupFunction {
	const savedHandler = useRef<(event: WindowEventMap[K] | Event) => void>();

	useLayoutEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const targetElement: T | Window | null = element?.current || window;

		if (!targetElement || !targetElement.addEventListener) return () => {};

		const listener = (event: Event): void => {
			savedHandler.current?.(event);
		};

		targetElement.addEventListener(eventName, listener, options);

		return () => {
			targetElement.removeEventListener(eventName, listener, options);
		};
	}, [eventName, element, options]);

	return () => {};
}

export { useEventListener };
