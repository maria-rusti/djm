import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@mui/material';
import { SliderContainer } from '../components/slide-show/SliderContiner';
import { SliderList } from '../components/slide-show/SliderList';
import { SliderItem } from '../components/slide-show/SliderItem';
import { SectionBadgeSG } from '../../../../components/landing/section-badge';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SectionDivider } from '../components/section-divider/index.styled';
import { uuid } from '../../../../utils/functions';
import usePartners from '../../../../hooks/fetch-hooks/use-partners';
import { IPartner } from '../../../../hooks/fetch-hooks/use-partners/index.interfaces';

const doubleArr = (data: IPartner[]): IPartner[] => [...data, ...data];

const PartnersSliderContent: FC = (): JSX.Element => {
	const { data } = usePartners<IPartner[]>(undefined, true);

	return (
		<SliderList  direction='left' duration={35} 
			sx={{ width: `${250 * (doubleArr(data)?.length ?? 0)}px!important` }} >
			{doubleArr(data)?.map((partener, _index) => (
				<SliderItem key={`${partener?._id}-${uuid()}`}>
					<Link sx={{ display: 'flex', alignItems: 'center' }}
						aria-labelledby='our-paretners'
						aria-label='our-paretners'
						title='our-paretners'
						href={partener?.link ? partener.link : ''} target='_blank'>
						<Icon icon={partener?.logo} />
					</Link>
				</SliderItem>
			))}
		</SliderList>
	);
};

const PartnersSlideshow: FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='parteners-slideshow' half pb={0}>
		<SectionBadgeSG>Partners</SectionBadgeSG>
		<SliderContainer>
			<PartnersSliderContent />
		</SliderContainer>
		<SectionDivider />
	</SectionWrapperSG>
);


export default PartnersSlideshow;
