import React from 'react';
// import { Box } from '@mui/material';
import FirstSection from './first-section';
import SecondSection from './second-section';
import { SecondHeroSectionWrapper } from './index.styles';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

const SecondHeroSection: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='second-hero-section'>
		<SecondHeroSectionWrapper >
			<FirstSection />
			<SecondSection />
		</SecondHeroSectionWrapper>
	</SectionWrapperSG>
);

export default SecondHeroSection;