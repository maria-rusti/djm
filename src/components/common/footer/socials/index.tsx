import { Box, Theme, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { Copyright } from '@mui/icons-material';
import { NavigateFunction, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
	ClickableText,
	SocialIconWrapper,
	SocialsLinksWrapper,
	SocialsWrapper,
	StyledIconButton,
} from './index.styled';
import { FooterSocial } from '../data/socials';
import { capitalize, uuid } from '../../../../utils/functions';
import BackToTop from '../../back-to-top';
import { HeroSectionWrapper } from '../../hero-section/index.styled';

interface FooterSocialsProps {
	socials: FooterSocial[];
}

const FooterSocials: FC<FooterSocialsProps> = ({ socials }): JSX.Element => {
	const currentYear = new Date().getFullYear();
	const navigate: NavigateFunction = useNavigate();
	const theme = useTheme<Theme>();
	const { t } = useTranslation();
	const numarDeTelefon = '+40730375108';

	const message = 'Salut, am o întrebare!';

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	const newSocials = [
		...socials,
		{
			url: `${
				isMobile
					? `https://wa.me/${numarDeTelefon}?text=${encodeURIComponent(message)}`
					: `https://api.whatsapp.com/send?phone=${numarDeTelefon}&text=${encodeURIComponent(message)}`
			}`,
			icon: <WhatsAppIcon />,
		},
	];

	return (
		<HeroSectionWrapper reverseGradient>
			<SocialsWrapper>
				<Box display='flex' gap={1}>
					<Typography color={theme.palette.primary.main}>Copyright</Typography>
					<Copyright sx={{ color: theme.palette.primary.main }} />
					<Typography color={theme.palette.primary.main}>SocialGod</Typography>
					<Typography color={theme.palette.primary.main}>{currentYear}</Typography>
				</Box>
				<SocialsLinksWrapper>
					<ClickableText onClick={(): void => navigate('/terms-of-service')}>
						{capitalize(t('footer.terms_of_service.title'))}
					</ClickableText>
				</SocialsLinksWrapper>
				<SocialIconWrapper>
					{newSocials.map((item: FooterSocial) => (
						<StyledIconButton
							aria-labelledby='SmartBoxDigital-socials'
							aria-label='SmartBoxDigital-socials'
							title='SmartBoxDigital-socials'
							href={item.url}
							target='_blank'
							rel='noopener'
							key={`socials-${uuid()}`}
						>
							{item.icon}
						</StyledIconButton>
					))}
				</SocialIconWrapper>
				<BackToTop />
			</SocialsWrapper>
		</HeroSectionWrapper>
	);
};

export default FooterSocials;
