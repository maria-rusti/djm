import React, { FC } from 'react';
import useServices from '../../../../hooks/fetch-hooks/use-services';
import { isArray } from '../../../../utils/functions';
import { IServiceResponse } from '../../../../hooks/fetch-hooks/use-services/index.interfaces';
import DraggCarouselWraper from './components/carousel-components/DraggCarouselWraper';
import TitleComponent from './components/title-components';
import ServicesCard from './components/services-card';
import useDrag from '../../../../hooks/use-drag';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

const ProductsSection: FC = () => {
	const { data: services } = useServices<IServiceResponse[]>(undefined, true);
	const data = isArray(services) ? services : [];
	const { isDragged, handleNext, handleDrag, handleDragStart, handleDragStop } = useDrag(data?.length);

	return (
		<SectionWrapperSG sx={{ m: 0}} sectionName='services-section'>
			<SectionBadgeSG>Services</SectionBadgeSG>
			<TitleComponent dataLength={data?.length} isDragged={isDragged} handleNext={handleNext} />
			<DraggCarouselWraper handleDrag={handleDrag} handleDragStart={handleDragStart}
				handleDragStop={handleDragStop} isDragged={isDragged}
				childrens={
					data?.map((service: IServiceResponse) =>
						<ServicesCard key={service?._id} service={service} />
					)
				}
			/>
		</SectionWrapperSG>
	);
};

export default ProductsSection;