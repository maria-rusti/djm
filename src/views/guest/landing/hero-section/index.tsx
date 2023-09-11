import React from 'react';
import { useTheme } from '@mui/material';
import HeroDetails from '../components/hero-details';
import { AnimatedSection, HeroSectionWrapper, StyledHeroImage } from './index.styled';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import MainImage from '../../../../assets/images/main.jpg';

const LandingHeroSection: React.FC = (): JSX.Element => {
	const theme = useTheme();

	return (
		<SectionWrapperSG p={0} sectionName='hero-section'>
			<HeroSectionWrapper>
				<Flex column maxWidth={theme.spacing(150)}>
					<HeroDetails />
					<AnimatedSection>
						<StyledHeroImage src={MainImage} alt='img not found' />
					</AnimatedSection>
				</Flex>
			</HeroSectionWrapper>
		</SectionWrapperSG>
	);
};

export default LandingHeroSection;
