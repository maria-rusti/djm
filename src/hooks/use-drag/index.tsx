import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { DragSG } from './index.interfaces';
import { stateSetter } from '../../utils/types/state';

export interface UseDragReturnType {
	isDragged: DragSG;
	setIsDragged: stateSetter<DragSG>;
	handleDragStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleDrag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isDraggedProp: DragSG)=> void;
	handleDragStop: () => void;
	handleNext: (action: 'prev' | 'next') => void;
}

function useDrag(dataLength: number): UseDragReturnType {
	const theme = useTheme();
	const matchDownLG = useMediaQuery<string>(theme.breakpoints.down('lg'));

	const [isDragged, setIsDragged] = useState<DragSG>(
		{ isDragged: false, prevPageX: 0, prevScrollLeft: 0, position: 0 });

	const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const dragObject: DragSG =
			{ isDragged: true, prevPageX: e.pageX, prevScrollLeft: isDragged?.prevScrollLeft, position: 0 };
		setIsDragged((dragObject));

	};

	const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isDraggedProp: DragSG): void => {
		if (!isDraggedProp?.isDragged) return;
		e.preventDefault();
		const positionDiff = e.pageX - (isDraggedProp.prevPageX || 0);
		const scrollLeft = positionDiff + (isDraggedProp.prevScrollLeft || 0);
		setIsDragged((prev) => ({ ...prev, prevScrollLeft: scrollLeft }));
	};

	const handleDragStop = (): void => {
		setIsDragged((prev) => ({ ...prev, isDragged: false }));
		
	};

	const handleNext = (action: 'prev' | 'next'): void => {
		if (action === 'next') {
			console.log('handleNext', isDragged.prevScrollLeft);
			isDragged?.prevScrollLeft > -(dataLength * 330 - (matchDownLG ? 330 : 660)) &&
				setIsDragged((prev) => ({ ...prev, prevScrollLeft: ((prev.prevScrollLeft || 0) - 320) }));
		} else if (action === 'prev') {
			isDragged?.prevScrollLeft < 990 &&
				setIsDragged((prev) => ({ ...prev, prevScrollLeft: ((prev.prevScrollLeft || 0) + 320) }));
		}
	};

	useEffect(() => {
		if (isDragged?.prevScrollLeft > 880){
			setIsDragged((prev) => ({ ...prev, prevScrollLeft: 50 }));
		} else if ( isDragged?.prevScrollLeft < -((dataLength || 0) * 440 - (matchDownLG ? 0 : 880))){
			const onRenderPosition = dataLength > 0 ? (dataLength || 0) * 440 - (matchDownLG ? 0 : 880) : 0;
			setIsDragged((prev) => ({
				...prev, prevScrollLeft: -(onRenderPosition)
			}));
		};
	}, [isDragged?.prevScrollLeft, isDragged?.isDragged, dataLength, setIsDragged, matchDownLG]);

	return {
		isDragged, setIsDragged, handleNext,
		handleDrag, handleDragStart, handleDragStop
	};
}

export default useDrag;
