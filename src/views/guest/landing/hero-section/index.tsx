import React, { Fragment } from 'react';
import { useTheme } from '@mui/material';
import images from '../../../../assets/svg/images.json';
import HeroDetails from '../components/hero-details';
import {
	AnimatedSection, HeroSectionWrapper,
	LikesAndHeartsWrapper,
	RedditIcon, TiktokIcon, TwitterIcon, YoutubeIcon, Image, RotatingCanvas
} from './index.styled';
import Icons from './data/hero-icons.json';
import { uuid } from '../../../../utils/functions';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import Canvas from '../../../../components/common/canvas';

interface IIcon {
	icon: string,
	type: string
}

const LandingHeroSection: React.FC = (): JSX.Element => {

	const handleIcon = (icon: IIcon): JSX.Element => {
		switch (icon.type) {
			case 'reddit': {
				return <RedditIcon icon={icon.icon} />;
			}
			case 'twitter': {
				return <TwitterIcon icon={icon.icon} />;
			}
			case 'youtube': {
				return <YoutubeIcon icon={icon.icon} />;
			}
			case 'tiktok': {
				return <TiktokIcon icon={icon.icon} />;
			}
			default: {
				return <div />;
			}
		}
	};

	const theme = useTheme();

	return (
		<SectionWrapperSG p={0} sectionName='hero-section'>
			<HeroSectionWrapper>
				<Flex column gap={10} maxWidth={theme.spacing(150)}>
					<HeroDetails />
					<AnimatedSection>
						<RotatingCanvas>
							<Canvas />
						</RotatingCanvas>
						{Icons.map((icon: IIcon): JSX.Element => (
							<Fragment key={`social-icons-${uuid()}`}>
								{handleIcon(icon)}
							</Fragment>
						))}
						<LikesAndHeartsWrapper>
							<Image alt='react-emoji'
								src={images?.likes_hearts} />
						</LikesAndHeartsWrapper>
					</AnimatedSection>
				</Flex>
			</HeroSectionWrapper>
		</SectionWrapperSG>
	);
};

export default LandingHeroSection;
