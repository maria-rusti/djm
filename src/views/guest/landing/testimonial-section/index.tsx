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
			<TestimonialsContent >
				<Box>
					<SectionTitleSG>
						Don&#39;t take our word for it.
					</SectionTitleSG>
					<SectionTitleSG >
						See what our clients say.
					</SectionTitleSG>
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