import React, { FC } from 'react';
import { SectionBadgeSG } from '../../../../../components/landing/section-badge';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import { Flex } from '../../../../../components/common';

const FeatureTitle: FC = () => (
	<>
		<SectionBadgeSG>Features</SectionBadgeSG>
		<Flex column>
			<SectionTitleSG>
				Advanced features{' '}
				<SectionTitleDistinctSG>professional</SectionTitleDistinctSG>
			</SectionTitleSG>
			<SectionTitleSG>marketers will love.</SectionTitleSG>
		</Flex>
	</>
);
export default FeatureTitle;
