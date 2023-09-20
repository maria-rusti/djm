import { Box, Typography, useTheme } from '@mui/material';
import { Flex } from '../../../common';
import { IFeatureItem } from '../../feature-item';
import { SectionBadgeSG } from '../../section-badge';
import InformationSectionFeatures from '../components/information-section-features';
import { SolutionCardSubtitle } from '../../../../views/guest/landing/solution-section/card/index.styled';

export interface InformationSectionProps {
	badge: string;
	title: string;
	subTitle: string;
	features: IFeatureItem[];
}
interface IProps {
	item: InformationSectionProps;
	service: string;
}

const InformationSection: React.FC<IProps> = ({ item, service }): JSX.Element => {
	const theme = useTheme();
	const { badge, title, subTitle, features } = item;
	return (
		<Flex column alignStart gap={4} maxWidth={560}>
			<SectionBadgeSG>{badge}</SectionBadgeSG>
			<Box>
				<Typography fontSize={theme.typography.h4.fontSize}>{title}</Typography>
				<SolutionCardSubtitle>{subTitle}</SolutionCardSubtitle>
			</Box>
			<InformationSectionFeatures features={features} video={service} />
		</Flex>
	);
};

export default InformationSection;
