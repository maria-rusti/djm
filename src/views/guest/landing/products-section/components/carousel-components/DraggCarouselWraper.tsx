import React, { FC, ReactNode } from 'react';
import { Carousel, Wrapper } from './index.style';
import { DragSG } from '../../../../../../hooks/use-drag/index.interfaces';

interface DragSGgCarouselProps {
	childrens: ReactNode;
	isDragged: DragSG;
	handleDragStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleDrag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isDraggedProp: DragSG) => void;
	handleDragStop: () => void;
}

const DraggCarouselWraper: FC<DragSGgCarouselProps> = (props: DragSGgCarouselProps) => {
	const { childrens, handleDrag, handleDragStart, handleDragStop, isDragged } = props;

	return (
		<Wrapper>
			<Carousel
				movement={isDragged?.prevScrollLeft}
				className='carousel'
				onMouseMove={(e): void => handleDrag(e, isDragged)}
				onMouseOut={(): void => handleDragStop()}
				onMouseDown={(e): void => handleDragStart(e)}
				onMouseUp={(): void => handleDragStop()}
			>
				{childrens}
			</Carousel>
		</Wrapper>
	);
};

export default DraggCarouselWraper;
