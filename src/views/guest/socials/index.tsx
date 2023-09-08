import { useParams } from 'react-router';
import { useCallback } from 'react';
import { CircularProgress } from '@mui/material';
import useSocials from '../../../hooks/fetch-hooks/use-social';
import { Flex } from '../../../components/common';
import { ISocial } from '../../../hooks/fetch-hooks/use-social/index.interfaces';
import SocialsPageTitleSection from './title-section';
import MoreSocialsSections from './more-socials-section';
import SocialsPageSection from '../../../components/landing/socials-page-section';
import Logo from '../../../components/common/logo';

const Socials: React.FC = (): JSX.Element => {
	const { platform } = useParams();
	const { data, loadingSocials } = useSocials<ISocial[]>(undefined, true);

	const currentSocial: ISocial =
		data && data?.filter((social: ISocial) => social.platform.toLowerCase() === platform)[0];

	const renderSocialComponent = useCallback(() => (
		currentSocial && !Array.isArray(currentSocial) &&
		<SocialsPageSection data={currentSocial.data} platform={currentSocial.platform} />
	), [currentSocial]);

	const renderSocialTitle = useCallback(() => (
		currentSocial && !Array.isArray(currentSocial) && <SocialsPageTitleSection
			platform={currentSocial?.platform}
			icon={currentSocial?.icon}
			description={currentSocial.description}
			image={currentSocial.image}
		/>
	), [currentSocial]);

	return (
		<Flex justifyCenter>
			{!loadingSocials ?
				(
					<Flex justifyCenter gap={5}>
						{renderSocialTitle()}
						{renderSocialComponent()}
						<MoreSocialsSections socials={data.slice(0, 4)} />
					</Flex>
				) : (
					<Flex justifyCenter sx={{ overflow: 'hidden', height: '100vh' }}>
						<CircularProgress sx={{ marginRight: '30px', display: 'flex', alignSelf: 'center' }} />
						<Logo width='30%' />
					</Flex>
				)}
		</Flex>
	);
};

export default Socials;