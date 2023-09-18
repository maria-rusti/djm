import React, { FC } from 'react';
import PartnersSlideshow from './partners-slideshow';
import { LandingPageContent, LandingPageWrapper } from './index.styled';
import ProductsSection from './products-section';
import FeatureSection from './feature-section';
import TestimonialSection from './testimonial-section';
import SolutionSection from './solution-section';
import BlogSection from './blog-section';
import UseCasesSection from './use-cases-section';
import NewsletterSection from './newsletter-section';
import LandingHeroSection from './hero-section';

const Landing: FC = () => (
	<LandingPageWrapper>
		<LandingPageContent>
			<LandingHeroSection />
			<ProductsSection />
			<PartnersSlideshow />
			<SolutionSection />
			<UseCasesSection />
			<FeatureSection />
			<TestimonialSection />
			<BlogSection />
			<NewsletterSection />
		</LandingPageContent>
	</LandingPageWrapper>
);

export default Landing;
