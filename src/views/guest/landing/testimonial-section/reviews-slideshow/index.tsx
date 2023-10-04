import { Flex } from '../../../../../components/common';
import ReviewCard from '../../../../../components/landing/review-card';
import useReview, { IReview } from '../../../../../hooks/fetch-hooks/use-review';
import { uuid } from '../../../../../utils/functions';
import SliderList from '../../components/slide-show/SliderList';
import { ReviewsSlideshowContainer } from './index.styled';

const ReviewsSlideshow: React.FC = (): JSX.Element => {
	const { data: reviews } = useReview();
	console.log({ reviews });

	const reviewsHalf: number | null = reviews && Math.ceil(reviews.length / 2);
	const upperReviews: IReview[] = reviews && reviewsHalf ? reviews?.slice(0, reviewsHalf) : [];
	const lowerReviews: IReview[] = reviews && reviewsHalf ? reviews?.slice(reviewsHalf) : [];

	// Calculați lățimea containerului SliderList în funcție de numărul de elemente
	// const sliderContainerStyle = {
	// 	display: 'flex',
	// 	overflowX: 'auto',
	// 	width: `${800 * (upperReviews?.length ?? 0)}px`, // Modificați dimensiunea containerului
	// 	WebkitOverflowScrolling: 'touch',
	// 	scrollSnapType: 'x mandatory',
	// 	msOverflowStyle: 'none',
	// 	scrollbarWidth: 'none',
	// 	'&::-webkit-scrollbar': {
	// 		display: 'none',
	// 	},
	// };

	return (
		<Flex column justifyCenter alignItems='center' gap={2}>
			<ReviewsSlideshowContainer>
				<SliderList direction='right' duration={50}>
					{[...upperReviews, ...upperReviews].map(
						(review: IReview): JSX.Element => (
							<ReviewCard key={`upper-review-${review.name}-${uuid()}`} {...review} />
						)
					)}
				</SliderList>
			</ReviewsSlideshowContainer>
			{lowerReviews?.length > 0 && (
				<ReviewsSlideshowContainer>
					<SliderList direction='left' duration={50}>
						{[...lowerReviews, ...lowerReviews].map(
							(review: IReview): JSX.Element => (
								<ReviewCard key={`lowerr-review-${review.name}-${uuid()}`} {...review} />
							)
						)}
					</SliderList>
				</ReviewsSlideshowContainer>
			)}
		</Flex>
	);
};

export default ReviewsSlideshow;
