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
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385223036-mariusFoto.jpg',
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385224230-mariusParty.jpg',
			},
		],
		sonorizare: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385223036-mariusFoto.jpg',
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385224230-mariusParty.jpg',
			},
		],
		fresh360: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385217507-fresh.jpeg',
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385218014-fresh360.jpg',
			},
		],
		lights: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385220330-lights2.jpg',
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385219301-lights1.jpg',
			},
		],
		cocktail: [
			{
				top: 0,
				left: '',
				above: false,
				width: '70%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385212640-bar2.jpg',
			},
			{
				top: '-40%',
				left: '50%',
				above: true,
				width: '65%',
				src: 'https://storage.googleapis.com/sbdcloud/djm-1695385211961-bar1.jpg',
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
							service={item?.service !== 'dj' ? item.service : ''}
						/>
						{index < dataLength && <Divider />}
					</Box>
				))}
			</Flex>
		</ProductsPageWrapper>
	);
};

export default Products;
