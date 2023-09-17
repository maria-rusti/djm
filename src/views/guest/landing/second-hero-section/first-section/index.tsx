import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { HeroSectionWrapper } from '../index.styles';
import { uuid } from '../../../../../utils/functions';
import sectionFeatures from '../data/first-section-features.json';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import FeatureItem from '../../../../../components/landing/feature-item';
import image1 from '../../../../../assets/images/mariusFoto.jpg';
import { useWindowSize } from '../../../../../hooks/use-window-size';

const FirstSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const { width } = useWindowSize();
	return (
		<HeroSectionWrapper>
			<Flex width='100%' column alignItems='flex-start' justifyCenter gap={5} maxWidth='550px'>
				<SectionTitleSG textAlign='left'> Creții Muzicale Exclusive</SectionTitleSG>
				<Typography color={theme?.palette?.text?.secondary}>
					Experimentați Muzica Originală a DJ-ului Nostru cu Două Piese de Excepție
				</Typography>
				<Flex width='100%' gap={5}>
					{sectionFeatures.map((item) => (
						<FeatureItem key={uuid()} feature={item} music='' service='' />
					))}
				</Flex>
			</Flex>
			<Box
				sx={{ borderRadius: '10px', marginBottom: '7%' }}
				component='img'
				src={image1}
				width={width > 900 ? '47%' : '100%'}
				height='350px'
			/>
		</HeroSectionWrapper>
	);
};

export default FirstSection;
