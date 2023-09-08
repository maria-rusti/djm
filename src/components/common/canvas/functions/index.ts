import { IDrawLine } from '../index.interfaces';

const handleImageCoords = (centerX: number, centerY: number, { x, y }: IDrawLine): number[] => {
	if (x > centerX) {
		if (y > centerY) return [x - 20, y];
		return [x, y - 20];
	}
	if (y > centerY) return [x - 30, y];
	return [x - 50, y - 20];
};
export { handleImageCoords };