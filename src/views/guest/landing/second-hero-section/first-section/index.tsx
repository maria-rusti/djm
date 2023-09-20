import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { HeroSectionWrapper } from '../index.styles';
import { uuid } from '../../../../../utils/functions';
import sectionFeatures from '../data/first-section-features.json';
// import { SectionTitleSG } from '../../../../../components/landing/section-title';
import FeatureItem from '../../../../../components/landing/feature-item';
import { useWindowSize } from '../../../../../hooks/use-window-size';

const FirstSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const { width } = useWindowSize();
	const arrayMap = width > 400 ? sectionFeatures : [sectionFeatures[0], sectionFeatures[1]];
	return (
		<HeroSectionWrapper sx={{ paddingBottom: width > 600 ? '190px' : '0' }}>
			<Flex column alignItems='flex-start' justifyCenter gap={{ xs: 8, md: 6 }} maxWidth='550px'>
				<Typography component='h2' fontSize={25} color={theme?.palette.common.white}>
					Experimentați Muzica Originală a DJ-ului Nostru
				</Typography>
				<Flex rowGap={6} flexWrap='wrap' justifyBetween maxWidth='550px'>
					{arrayMap.map((item) => (
						<FeatureItem landing key={uuid()} feature={item} music='' service='' />
					))}
				</Flex>
			</Flex>
		</HeroSectionWrapper>
	);
};

export default FirstSection;
