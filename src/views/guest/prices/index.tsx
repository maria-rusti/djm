import React, { FC } from 'react';
import PriceCardSection from './price-cards';
// import TitleSection from './title-section';
import { PricesWrapper } from './index.styled';
import HeroSection from '../../../components/common/hero-section';

const Prices: FC = () => (
	<PricesWrapper>
		{/* <TitleSection /> */}
		<HeroSection title='Pricing' description='We have you covered, whether you&apos;re an individual
			content creator, a brand, business or an agency.'/>
		<PriceCardSection />
	</PricesWrapper>
);

export default Prices;