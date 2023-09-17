import { Box, Typography, useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { HeroSectionWrapper } from '../index.styles';
import { uuid } from '../../../../../utils/functions';
import aiFeatures from '../data/ai-features.json';
import { SectionTitleSG } from '../../../../../components/landing/section-title';
import FeatureItem from '../../../../../components/landing/feature-item';
import image1 from '../../../../../assets/images/mariusParty.jpg';
import { useWindowSize } from '../../../../../hooks/use-window-size';

const SecondSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const { width } = useWindowSize();
	return (
		<HeroSectionWrapper reverse>
			<Box
				sx={{ borderRadius: '10px', marginTop: '7%' }}
				component='img'
				src={image1}
				width={width > 900 ? '47%' : '100%'}
				height='350px'
			/>

			<Flex column alignItems='flex-start' justifyCenter gap={{ xs: 4, md: 2 }} maxWidth='550px'>
				<SectionTitleSG textAlign='left'>Distracție la Cote Înalte</SectionTitleSG>
				<Typography color={theme?.palette?.text?.secondary}>
					Pregătiți-vă pentru O Noapte de Neuitat cu Lumini, Sunet și Acțiune 360
				</Typography>
				<Flex rowGap={2} flexWrap='wrap' justifyBetween maxWidth='550px'>
					{aiFeatures.map((item) => (
						<FeatureItem key={uuid()} feature={item} music='' service='' />
					))}
				</Flex>
			</Flex>
		</HeroSectionWrapper>
	);
};

export default SecondSection;
