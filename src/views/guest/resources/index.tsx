import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { Flex } from '../../../components/common';
import BlogContent from './data/blog.json';
import UserGuidesContent from './data/userGuides.json';
import DefaultContent from './data/default.json';
import { uuid } from '../../../utils/functions';
import ProductsPageSection from '../../../components/landing/products-page-section';
import HeroSection from '../../../components/common/hero-section';
import { IProductContent } from '../products/index.interfaces';
import mariusFoto from '../../../assets/images/mariusFoto.jpg';
import mariusMusic from '../../../assets/images/mariusParty.jpg';

const handlePageContent = (page: string | undefined): IProductContent => {
	switch (page) {
		case 'blog': {
			return BlogContent;
		}
		case 'user-guides': {
			return UserGuidesContent;
		}
		default: {
			return DefaultContent;
		}
	}
};

const Resources: FC = () => {
	const url = useParams();

	const pageContent = handlePageContent(url.page);

	const { title, description, data } = pageContent;
	const dataLength = data.length;
	const arrayImages = [
		[
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: mariusFoto,
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: mariusMusic,
			},
		],
	];

	return (
		<Flex column justifyCenter width='100%'>
			<HeroSection title={title} description={description} />
			<Flex gap={20} justifyCenter column width='100%'>
				{data.map((item, index) => (
					<Box
						key={uuid()}
						display='flex'
						flexDirection='column'
						gap={20}
						justifyContent='center'
						sx={{ width: { lg: 1200, xs: '100%' } }}
					>
						<ProductsPageSection item={item} images={arrayImages[index]} service={item.service} />
						{index < dataLength && <Divider />}
					</Box>
				))}
			</Flex>
		</Flex>
	);
};

export default Resources;
