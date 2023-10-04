import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@mui/material';
import { SliderContainer } from '../components/slide-show/SliderContiner.styled';
// import { SliderList } from '../components/slide-show/SliderList';
import { SliderItem } from '../components/slide-show/SliderItem';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SectionDivider } from '../components/section-divider/index.styled';
import { uuid } from '../../../../utils/functions';
import { IPartner } from '../../../../hooks/fetch-hooks/use-partners/index.interfaces';
import { SolutionWrapper } from '../solution-section/index.styled';
import SliderList from '../components/slide-show/SliderList';
// import image from '../../../../assets/landingSection/contact1.jpg';

const doubleArr = (data: IPartner[]): IPartner[] => [...data, ...data];
// const sliderContainerStyle = {
// 	display: 'flex',
// 	overflowX: 'auto',
// 	width: '100%',
// 	WebkitOverflowScrolling: 'touch',
// 	scrollSnapType: 'x mandatory',
// 	msOverflowStyle: 'none',
// 	scrollbarWidth: 'none',
// 	'&::-webkit-scrollbar': {
// 		display: 'none',
// 	},
// };

const sliderItemStyle = {
	flex: '0 0 auto',
	scrollSnapAlign: 'start',
};

const PartnersSliderContent: FC = (): JSX.Element => {
	const numarDeTelefon = '+40730375108';

	const message = 'Salut, am o întrebare!';

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	const data = [
		{
			link: 'https://www.instagram.com/direct/t/100957321307224/',
			logo: 'skill-icons:instagram',
			name: 'Instagram',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
		{
			link: `${
				isMobile
					? `https://wa.me/${numarDeTelefon}?text=${encodeURIComponent(message)}`
					: `https://api.whatsapp.com/send?phone=${numarDeTelefon}&text=${encodeURIComponent(message)}`
			}`,
			logo: 'logos:whatsapp-icon',
			name: 'Whatsapp',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
		{
			link: 'https://www.facebook.com/MariusGageaDJM',
			logo: 'devicon:facebook',
			name: 'Facebook',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
		{
			link: 'https://www.instagram.com/direct/t/100957321307224/',
			logo: 'skill-icons:instagram',
			name: 'Instagram',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
		{
			link: `${
				isMobile
					? `https://wa.me/${numarDeTelefon}?text=${encodeURIComponent(message)}`
					: `https://api.whatsapp.com/send?phone=${numarDeTelefon}&text=${encodeURIComponent(message)}`
			}`,
			logo: 'logos:whatsapp-icon',
			name: 'Whatsapp',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
		{
			link: 'https://www.facebook.com/MariusGageaDJM',
			logo: 'devicon:facebook',
			name: 'Facebook',
			_id: '64ca12d5a62d3ad5161f4fad',
		},
	];
	return (
		<SliderList
			direction='left'
			duration={105}
		>
			{doubleArr(data)?.map((partener, _index) => (
				<SliderItem sx={{ sliderItemStyle }} key={`${partener?._id}-${uuid()}`}>
					<Link
						sx={{ display: 'flex', alignItems: 'center' }}
						aria-labelledby='our-paretners'
						aria-label='our-paretners'
						title='our-paretners'
						href={partener?.link ? partener.link : ''}
						target='_blank'
					>
						<Icon icon={partener?.logo} />
					</Link>
				</SliderItem>
			))}
		</SliderList>
	);
};

const PartnersSlideshow: FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='parteners-slideshow' pb={0}>
		<SolutionWrapper image='https://storage.googleapis.com/sbdcloud/djm-1695385214553-contact1.jpg'>
			<SliderContainer>
				<PartnersSliderContent />
			</SliderContainer>
			<SectionDivider />
		</SolutionWrapper>
	</SectionWrapperSG>
);

export default PartnersSlideshow;
