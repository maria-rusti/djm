import React from 'react';
import FirstSection from './first-section';
import { SecondHeroSectionWrapper } from './index.styles';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

const SecondHeroSection: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='second-hero-section'>
		<SecondHeroSectionWrapper >
			<FirstSection />
		</SecondHeroSectionWrapper>
	</SectionWrapperSG>
);

export default SecondHeroSection;