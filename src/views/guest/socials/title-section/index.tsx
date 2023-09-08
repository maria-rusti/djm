import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { Flex } from '../../../../components/common';
import { Platform } from '../../../../hooks/fetch-hooks/use-social/index.interfaces';
import { SocialsPageImageWrapper, SocialsPageTitleSectionWrapper, StyledImage } from './index.styled';

interface IProps {
	icon: string,
	description: string,
	image: string,
	platform: Platform
}

const SocialsPageTitleSection: React.FC<IProps> = ({ icon, description, image, platform }): JSX.Element => (
	<SocialsPageTitleSectionWrapper>
		<Flex column maxWidth={500} gap={5} alignStart>
			<Flex gap={2}>
				<Icon icon={icon} height={80} />
				<Typography variant='h3' fontWeight='bold'>{platform}</Typography>
			</Flex>
			<Typography color='grey'>{description}</Typography>
		</Flex>
		<SocialsPageImageWrapper>
			<StyledImage src={image} alt='img not found' />
		</SocialsPageImageWrapper>
	</SocialsPageTitleSectionWrapper>
);

export default SocialsPageTitleSection;