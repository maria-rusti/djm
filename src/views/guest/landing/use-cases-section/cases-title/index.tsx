import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { SectionBadgeSG } from '../../../../../components/landing/section-badge';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';

const CasesTitle: FC = () => {
	const theme = useTheme();

	return (
		<Flex justifyCenter maxWidth={theme.spacing(62)} gap={3}>
			<SectionBadgeSG >Use Cases</SectionBadgeSG>
			<SectionTitleSG >
				<SectionTitleDistinctSG>Much more</SectionTitleDistinctSG>
				{' '} than just a simple scheduler
			</SectionTitleSG>
		</Flex>
	);
};

export default CasesTitle;