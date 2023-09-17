import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { Flex } from '../../../components/common';
import { IProductContent } from './index.interfaces';
import DJContent from './data/DJContent.json';
import FreshContent from './data/FreshContent.json';
import Sonorizare from './data/Sonorizare.json';
import LightsContent from './data/LightsContent.json';
import BarContent from './data/BarContent.json';
import DefaultContent from './data/default.json';
import { uuid } from '../../../utils/functions';
import ProductsPageSection from '../../../components/landing/products-page-section';
import HeroSection from '../../../components/common/hero-section';
import { ProductsPageWrapper } from './index.styled';
import mariusFoto from '../../../assets/images/mariusFoto.jpg';
import mariusMusic from '../../../assets/images/mariusParty.jpg';
import fresh1 from '../../../assets/images/fresh.jpeg';
import fresh2 from '../../../assets/images/fresh360.jpg';
import lights1 from '../../../assets/images/lights1.jpg';
import lights2 from '../../../assets/images/lights2.jpg';
import bar1 from '../../../assets/images/bar1.jpg';
import bar2 from '../../../assets/images/bar2.jpg';

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
		case 'cocktail': {
			return BarContent;
		}
		case 'sonorizare': {
			return Sonorizare;
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
	const arrayImages = {
		dj: [
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
		sonorizare: [
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
		fresh360: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: fresh1,
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: fresh2,
			},
		],
		lights: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: lights2,
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: lights1,
			},
		],
		cocktail: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: bar1,
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: bar2,
			},
		],
	};
	function getIfKeyIsSomething(obj: { [key: string]: any }, keyToCheck: string): any | undefined {
		if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
			return obj[keyToCheck];
		}
		return undefined;
	}
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
						<ProductsPageSection
							item={item}
							images={getIfKeyIsSomething(arrayImages, url.page ? url.page : '')}
							service={item.service !== 'dj' ? item.service : ''}
						/>
						{index < dataLength && <Divider />}
					</Box>
				))}
			</Flex>
		</ProductsPageWrapper>
	);
};

export default Products;
