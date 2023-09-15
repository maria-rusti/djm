import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { SectionBadgeSG } from '../../../../../components/landing/section-badge';
import { SectionTitleSG } from '../../../../../components/landing/section-title';

const CasesTitle: FC = () => {
	const theme = useTheme();

	return (
		<Flex justifyCenter maxWidth={theme.spacing(62)} gap={3}>
			<SectionBadgeSG>Frecvent</SectionBadgeSG>
			<SectionTitleSG>
				 Cele mai Intense Moment de Distrație
			</SectionTitleSG>
		</Flex>
	);
};

export default CasesTitle;
