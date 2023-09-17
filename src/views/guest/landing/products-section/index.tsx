import React, { FC } from 'react';
import { isArray } from '../../../../utils/functions';
import { IServiceResponse } from '../../../../hooks/fetch-hooks/use-services/index.interfaces';
import DraggCarouselWraper from './components/carousel-components/DraggCarouselWraper';
import TitleComponent from './components/title-components';
import ServicesCard from './components/services-card';
import useDrag from '../../../../hooks/use-drag';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

const ProductsSection: FC = () => {
	const services = [
		{
			icon: { source: 'Iconify', name: 'entypo:sound-mix' },
			platform: 'DJ',
			products: [
				{
					icon: { source: 'Iconify', name: '' },
					name: `
	
DJ Marius, cu peste 10 ani de 
experiență în muzică, creează atmosfera perfectă la
 nunti, botezuri și majorate, garantând o petrecere memorabilă și plină de ritm.`,
				},
			],
			_id: '64c36ea54e0df0804e2359ef',
			path: '/servicii/dj',
		},
		{
			icon: { source: 'Iconify', name: 'icon-park-outline:sound-one' },
			platform: 'Sonorizare',
			products: [
				{
					icon: { source: 'Iconify', name: '' },
					name: `Sunet de excepție pentru orice eveniment. Experimentați calitatea sonoră la 
					superlativ cu Dj Marius. Transformăm sunetul în magie.`,
				},
			],
			_id: '64c36ea54egfdf0804e45r2359ef',
			path: '/servicii/sonorizare',
		},
		{
			icon: { source: 'Iconify', name: 'teenyicons:360-outline' },
			platform: 'Fresh360',
			products: [
				{
					icon: { source: 'Iconify', name: '' },
					name: `
					Fresh360 transformă evenimentele în
					 amintiri video memorabile, păstrându-le vii în inimile participanților.`,
				},
			],
			_id: '64c36ea54egfdf0804e2359ef',
			path: '/servicii/fresh360',
		},
		{
			icon: { source: 'Iconify', name: 'mdi:string-lights' },
			platform: 'Lights',
			products: [
				{
					icon: { source: 'Iconify', name: '' },
					name: `
					Schela de lumini cu Beam-uri oferă o 
					atmosferă magică și spectaculoasă la orice eveniment. Transformă-ți 
					ocazia într-o experiență memorabilă și strălucitoare.`,
				},
			],
			_id: '64c36ea54gfdhdf0804e2359ef',
			path: '/servicii/lights',
		},
		{
			icon: { source: 'Iconify', name: 'fontisto:cocktail' },
			platform: 'Cocktail Bar',
			products: [
				{
					icon: { source: 'Iconify', name: '' },
					name: `
			Cocktail Bar-ul aduce magie în pahare. Bucurați-vă de arome 
			rafinate și amestecuri spectaculoase într-o atmosferă vibrantă și memorabilă.`,
				},
			],
			_id: '64c36ea54e0df08gdf4e2359ef',
			path: '/servicii/cocktail-bar',
		},
	];
	const data = isArray(services) ? services : [];
	const { isDragged, handleNext, handleDrag, handleDragStart, handleDragStop } = useDrag(data?.length);

	return (
		<SectionWrapperSG sx={{ m: 0 }} sectionName='services-section'>
			<SectionBadgeSG>Servicii</SectionBadgeSG>
			<TitleComponent dataLength={data?.length} isDragged={isDragged} handleNext={handleNext} />
			<DraggCarouselWraper
				handleDrag={handleDrag}
				handleDragStart={handleDragStart}
				handleDragStop={handleDragStop}
				isDragged={isDragged}
				childrens={data?.map((service: IServiceResponse) => (
					<ServicesCard key={service?._id} service={service} />
				))}
			/>
		</SectionWrapperSG>
	);
};

export default ProductsSection;
