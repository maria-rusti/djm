import { HeadingText } from '../../../views/guest/landing/components/hero-details/index.styled';
import GetStartedButton from '../buttons/get-started-button';
import GetStartedBox from '../get-started-box';
import { GetStartedBoxDecorations } from '../get-started-box/index.interfaces';
import { ImageWrapper } from '../../../views/guest/landing/second-hero-section/index.styles';
import { uuid } from '../../../utils/functions';
import { BottomGetStartedCardContent } from './index.styled';
import { Flex } from '../../common';
import SectionWrapperSG from '../section-wrapper';
import FloatingImage from '../../../views/guest/landing/second-hero-section/components/FloatingImage';
import imagesSVG from '../../../assets/svg/images.json';


const BottomGetStartedCard: React.FC = (): JSX.Element => {

	const dots: GetStartedBoxDecorations[] = [{
		top: '-10%',
		left: '20%',
		type: 'dots'
	}, {
		top: '-15%',
		left: '70%',
		type: 'dots'
	}, {
		top: '100%',
		left: '40%',
		type: 'dots'
	}, {
		top: '100%',
		left: '90%',
		type: 'dots'
	}];

	const images = [{
		top: 70,
		left: 70,
		above: true,
		src: imagesSVG?.second_hero_1st
	}, {
		top: 90,
		left: 0,
		above: false,		
		src: imagesSVG?.second_hero_2nd
	}];

	return (
		<SectionWrapperSG sectionName='get-started-section'>
			<GetStartedBox decorations={dots} big>
				<BottomGetStartedCardContent>
					<Flex justifyCenter column gap={3} mt={{ xs: 4, md: 1}} >
						<HeadingText color='#fff'>Ready to get started? Create an account for free!</HeadingText>
						<GetStartedButton white />
					</Flex>
					<ImageWrapper>
						{images.map(({ src, ...rest }) => (
							<FloatingImage cardImage key={`${uuid()}-first-image`} src={src} {...rest} />
						))}
					</ImageWrapper>
				</BottomGetStartedCardContent>
			</GetStartedBox>
		</SectionWrapperSG>
	);

};

export default BottomGetStartedCard;