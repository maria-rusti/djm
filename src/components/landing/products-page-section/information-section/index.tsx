import { Box, Typography, useTheme } from '@mui/material';
import { Flex } from '../../../common';
import { IFeatureItem } from '../../feature-item';
import { SectionBadgeSG } from '../../section-badge';
import InformationSectionFeatures from '../components/information-section-features';

export interface InformationSectionProps {
	badge: string;
	title: string;
	subTitle: string;
	features: IFeatureItem[];
}

const InformationSection: React.FC<InformationSectionProps> = ({ badge, title, subTitle, features }): JSX.Element => {
	const theme = useTheme();
	return (
		<Flex column alignStart gap={4} maxWidth={560}>
			<SectionBadgeSG>{badge}</SectionBadgeSG>
			<Box>
				<Typography fontSize={theme.typography.h4.fontSize}>{title}</Typography>
				<Typography color={theme.palette.grey[600]}>{subTitle}</Typography>
			</Box>
			<InformationSectionFeatures features={features} />
		</Flex>
	);
};

export default InformationSection;
