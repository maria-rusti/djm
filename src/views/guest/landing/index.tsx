import React, { FC } from 'react';
import LandingHeroSection from './hero-section';
import PartnersSlideshow from './partners-slideshow';
import { LandingPageContent, LandingPageWrapper } from './index.styled';
import ProductsSection from './products-section';
import FeatureSection from './feature-section';
import TestimonialSection from './testimonial-section';
import SolutionSection from './solution-section';
import SecondHeroSection from './second-hero-section';
import BottomGetStartedCard from '../../../components/landing/bottom-get-starting-card';
import BlogSection from './blog-section';
import UseCasesSection from './use-cases-section';
import NewsletterSection from './newsletter-section';
import FirstGetStartedBox from './second-hero-section/get-started-box';

const Landing: FC = () => (
	<LandingPageWrapper>
		<LandingPageContent>
			<LandingHeroSection />
			<ProductsSection />
			<PartnersSlideshow />
			<SolutionSection />
			<SecondHeroSection />
			<FirstGetStartedBox />
			<UseCasesSection />
			<FeatureSection />
			<TestimonialSection />
			<BottomGetStartedCard />
			<BlogSection />
			<NewsletterSection />
		</LandingPageContent>
	</LandingPageWrapper>
);

export default Landing;
