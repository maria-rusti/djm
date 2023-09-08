import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import { Flex } from '../../../../components/common';
import SocialCard from './card';
import { uuid } from '../../../../utils/functions';
import { SocialsCardsWrapper } from './index.styled';
import { ISocial, Platform } from '../../../../hooks/fetch-hooks/use-social/index.interfaces';

const handleCardData = (url: Platform, data: ISocial[]): ISocial[] => {
	if (Array.isArray(data)) {
		const socials = data?.map((item) => item.platform.toLowerCase());
		if (socials.includes(url)) {
			return data?.filter((item) => item.platform.toLowerCase() !== url);
		}
		return data?.slice(0, 3);
	}
	return [];
};

interface IProps {
	socials: ISocial[]
}

const MoreSocialsSections: React.FC<IProps> = ({ socials }): JSX.Element => {
	const { platform } = useParams();
	const cardData = handleCardData(platform as Platform, socials);
	return (
		<Flex column width='100%' >
			<Typography variant='h3' fontWeight='bold'>More Socials</Typography>
			<SocialsCardsWrapper minHeight={350}>
				{cardData.map((item) => (
					<SocialCard key={uuid()} {...item} />
				))}
			</SocialsCardsWrapper>
		</Flex>
	);
};

export default MoreSocialsSections;