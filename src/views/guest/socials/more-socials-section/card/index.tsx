import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
import { Flex } from '../../../../../components/common';
import { StyledSocialCard } from './index.styled';
import { IconBackground } from '../../../landing/solution-section/card/index.styled';
import { StyledGetStartedButtonArrow } from '../../../../../components/landing/buttons/get-started-button/index.styled';
import { ISocial } from '../../../../../hooks/fetch-hooks/use-social/index.interfaces';

const SocialCard: React.FC<ISocial> = ({ platform, description, icon }): JSX.Element => {
	const [hover, setHover] = useState<boolean>();
	const navigate = useNavigate();

	const handleNavigate = (): void => navigate(`/socials/${platform.toLowerCase().replace(/ /g, '-')}`);

	return (
		<StyledSocialCard hover onClick={handleNavigate}
			onMouseOver={(): void => setHover(true)}
			onMouseLeave={(): void => setHover(false)}>
			<Flex gap={3}>
				<IconBackground hover={hover}>
					<Icon icon={icon} width={80} />
				</IconBackground>
				<Box>
					<Typography>{platform}</Typography>
				</Box>
			</Flex>
			<Flex column gap={2} alignStart marginTop={2}>
				<Typography color='grey'>{description}</Typography>
				<Typography color='primary' alignItems='center' display='flex'>
					View Integration <StyledGetStartedButtonArrow hover={!!hover} icon='maki:arrow' />
				</Typography>
			</Flex>
		</StyledSocialCard>
	);
};

export default SocialCard;