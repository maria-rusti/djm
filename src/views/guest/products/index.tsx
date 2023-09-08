import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { Flex } from '../../../components/common';
import { IProductContent } from './index.interfaces';
import SchedulingContent from './data/scheduling.json';
import AnalyticsContent from './data/analytics.json';
import SocialInboxContent from './data/social-inbox.json';
import SocialGodAIContent from './data/socialgod-ai.json';
import CollaborationContent from './data/collaboration.json';
import WhiteLabelContent from './data/white-label.json';
import DefaultContent from './data/default.json';
import { uuid } from '../../../utils/functions';
import ProductsPageSection from '../../../components/landing/products-page-section';
import HeroSection from '../../../components/common/hero-section';
import { ProductsPageWrapper } from './index.styled';

const handlePageContent = (page: string | undefined): IProductContent => {
	switch (page) {
		case 'scheduling': {
			return SchedulingContent;
		}
		case 'analytics': {
			return AnalyticsContent;
		}
		case 'social-inbox': {
			return SocialInboxContent;
		}
		case 'socialgod-ai': {
			return SocialGodAIContent;
		}
		case 'collaboration': {
			return CollaborationContent;
		}
		case 'white-label': {
			return WhiteLabelContent;
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

	return (
		<ProductsPageWrapper >
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
