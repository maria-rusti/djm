/* eslint-disable no-nested-ternary */
import React from 'react';
import { Typography } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { HeroSectionWrapper } from '../index.styles';
import { uuid } from '../../../../../utils/functions';
import sectionFeatures from '../data/first-section-features.json';
import FeatureItem from '../../../../../components/landing/feature-item';
import { useWindowSize } from '../../../../../hooks/use-window-size';
import music from '../../../../../assets/video/music.mp3';
import music1 from '../../../../../assets/video/nunta2.mp3';
import music2 from '../../../../../assets/video/nunta3.mp3';
import music3 from '../../../../../assets/video/nunta1.mp3';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';

const FirstSection: React.FC = (): JSX.Element => {
	const { width } = useWindowSize();
	const musicPlay = [music, music1, music2, music3];

	const arrayMap = width > 400 ? sectionFeatures : [sectionFeatures[0], sectionFeatures[1]];
	return (
		<HeroSectionWrapper sx={{ paddingBottom: width > 600 ? '85px' : '0' }}>
			<Flex column alignEnd justifyCenter gap={{ xs: 8, md: 6 }} maxWidth='550px'>
				<Typography component='h2'> </Typography>
				<SectionTitleSG>
					{' '}
					<SectionTitleDistinctSG>Experimentați Muzica Originală a DJ-ului Nostru</SectionTitleDistinctSG>
				</SectionTitleSG>
				<Flex rowGap={6} flexWrap='wrap' justifyBetween maxWidth='550px'>
					{arrayMap.map((item, index) => (
						<FeatureItem landing key={uuid()} feature={item} music={musicPlay[index]} service='' />
					))}
				</Flex>
			</Flex>
		</HeroSectionWrapper>
	);
};

export default FirstSection;
