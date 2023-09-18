import { Box, Theme, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { Copyright } from '@mui/icons-material';
import { NavigateFunction, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
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
					<ClickableText onClick={(): void => navigate('/privacy-policy')}>
						{capitalize(t('footer.privacy_policy.title'))}
					</ClickableText>
					<ClickableText onClick={(): void => navigate('/terms-of-service')}>
						{capitalize(t('footer.terms_of_service.title'))}
					</ClickableText>
					<ClickableText onClick={(): void => navigate('/Faq')}>{capitalize(t('faq'))}</ClickableText>
					<ClickableText onClick={(): void => navigate('/')}>{capitalize(t('footer.status'))}</ClickableText>
				</SocialsLinksWrapper>
				<SocialIconWrapper>
					{socials.map((item: FooterSocial) => (
						<StyledIconButton
							aria-labelledby='SmartBoxDigital-socials'
							aria-label='SmartBoxDigital-socials'
							title='SmartBoxDigital-socials'
							href={`https://www.${item.url}`}
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
