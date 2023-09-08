import { Box, ListItem, Rating, Typography } from '@mui/material';
import { CardSG, Flex } from '../../common';
import { IReview } from '../../../hooks/fetch-hooks/use-review';
import { ReviewCardText } from './index.styled';

const ReviewCard: React.FC<IReview> = ({ reviewer, content, position, rating }): JSX.Element => (
	<ListItem>
		<CardSG width={300} height={400} >
			<Flex gap={2} marginBottom={2}>
				<Box width={40} height={40}>
					<Box component='img'
						src={`https://images.unsplash.com/photo-1430990480609-
					2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wY
					WdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
						alt='Image not found' borderRadius='50%' width='100%' height='100%'
						sx={{ objectFit: 'cover' }} />
				</Box>
				<Box>
					<Typography>{reviewer}</Typography>
					<Typography color='GrayText'>{position}</Typography>
				</Box>
			</Flex>
			<Rating value={rating} readOnly precision={0.5} />
			<ReviewCardText >{content}</ReviewCardText>
		</CardSG>
	</ListItem>
);

export default ReviewCard;