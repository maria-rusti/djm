import React, { FC } from 'react';
import { SectionBadgeSG } from '../../../../../components/landing/section-badge';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import { Flex } from '../../../../../components/common';

const FeatureTitle: FC = () => (
	<>
		<SectionBadgeSG>Echipament</SectionBadgeSG>
		<Flex sx={{paddingTop: '10px'}} column>
			<SectionTitleSG>
				<SectionTitleDistinctSG>Profesional de Înaltă Performanță</SectionTitleDistinctSG>
			</SectionTitleSG>
		</Flex>
	</>
);
export default FeatureTitle;
