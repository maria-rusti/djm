interface MapItemsProps<T extends Record<string, any>> {
	items: T[];
	renderItems: (element: T, index: number) => JSX.Element;
}

export type { MapItemsProps };
