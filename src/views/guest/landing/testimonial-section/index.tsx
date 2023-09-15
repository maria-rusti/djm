import { Box } from '@mui/material';
import { Flex } from '../../../../components/common';
import GetStartedButton from '../../../../components/landing/buttons/get-started-button';
import ReviewsSlideshow from './reviews-slideshow';
import { TestimonialsContent, TestimonialsWrapper } from './index.styled';
import { SectionTitleSG } from '../../../../components/landing/section-title';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';

const TestimonialSection: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='testimonials-section' column half>
		<TestimonialsWrapper>
			<TestimonialsContent>
				<Box>
					<SectionTitleSG>Experiențele Noastre </SectionTitleSG>
					<SectionTitleSG>Prin Ochii Clienților</SectionTitleSG>
				</Box>
				<Flex>
					<GetStartedButton />
				</Flex>
			</TestimonialsContent>
			<ReviewsSlideshow />
		</TestimonialsWrapper>
	</SectionWrapperSG>
);

export default TestimonialSection;
