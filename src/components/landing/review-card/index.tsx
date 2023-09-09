import { Box, ListItem, Rating, Typography } from '@mui/material';
import DummyImage from '../../../assets/images/dummy-review.jpg';
import { CardSG, Flex } from '../../common';
import { IReview } from '../../../hooks/fetch-hooks/use-review';
import { ReviewCardText } from './index.styled';

const ReviewCard: React.FC<IReview> = ({ name, content, position }): JSX.Element => (
	<ListItem>
		<CardSG width={300} height={400}>
			<Flex gap={2} marginBottom={2}>
				<Box width={40} height={40}>
					<Box
						component='img'
						src={`${DummyImage}`}
						alt='Image not found'
						borderRadius='50%'
						width='100%'
						height='100%'
						sx={{ objectFit: 'cover' }}
					/>
				</Box>
				<Box>
					<Typography>{name}</Typography>
					<Typography color='GrayText'>{position}</Typography>
				</Box>
			</Flex>
			<Rating value={5} readOnly precision={0.5} />
			<ReviewCardText>{content}</ReviewCardText>
		</CardSG>
	</ListItem>
);

export default ReviewCard;
