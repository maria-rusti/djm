import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { Flex } from '../../../components/common';
import { IProductContent } from './index.interfaces';
import DJContent from './data/DJContent.json';
import FreshContent from './data/FreshContent.json';
import LightsContent from './data/LightsContent.json';
import BarContent from './data/BarContent.json';
import DefaultContent from './data/default.json';
import { uuid } from '../../../utils/functions';
import ProductsPageSection from '../../../components/landing/products-page-section';
import HeroSection from '../../../components/common/hero-section';
import { ProductsPageWrapper } from './index.styled';

const handlePageContent = (page: string | undefined): IProductContent => {
	switch (page) {
		case 'dj': {
			return DJContent;
		}
		case 'fresh360': {
			return FreshContent;
		}
		case 'lights': {
			return LightsContent;
		}
		case 'cocktail-bar': {
			return BarContent;
		}
		default: {
			return DefaultContent;
		}
	}
};

const Products: FC = () => {
	const url = useParams();

	const pageContent = handlePageContent(url.page);

	const { title, description, data } = pageContent;
	const dataLength = data.length;
	// const newDate = [
	// 	data[0].information.features.map((item) => ({
	// 		...item,
	// 		music: nunta,
	// 	})),
	// 	data[1],
	// ];
	return (
		<ProductsPageWrapper>
			<HeroSection title={title} description={description} />
			<Flex gap={10} justifyCenter column width='100%'>
				{data.map((item, index) => (
					<Box
						key={uuid()}
						display='flex'
						flexDirection='column'
						gap={10}
						justifyContent='center'
						sx={{ width: { lg: 1200, xs: '100%' } }}
					>
						<ProductsPageSection {...item} />
						{index < dataLength && <Divider />}
					</Box>
				))}
			</Flex>
		</ProductsPageWrapper>
	);
};

export default Products;
