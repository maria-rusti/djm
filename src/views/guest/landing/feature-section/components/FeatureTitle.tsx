import React, { FC } from 'react';
import { SectionBadgeSG } from '../../../../../components/landing/section-badge';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import { Flex } from '../../../../../components/common';

const FeatureTitle: FC = () => (
	<>
		<SectionBadgeSG>Echipament</SectionBadgeSG>
		<Flex column>
			<SectionTitleSG>
				<SectionTitleDistinctSG>Profesional</SectionTitleDistinctSG>
			</SectionTitleSG>
			<SectionTitleSG>de Înaltă Performanță</SectionTitleSG>
		</Flex>
	</>
);
export default FeatureTitle;
