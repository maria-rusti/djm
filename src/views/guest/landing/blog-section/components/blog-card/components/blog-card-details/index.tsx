import React, { FC } from 'react';
import { Divider, Typography } from '@mui/material';
import { Flex } from '../../../../../../../../components/common';
import { BlogCardActionContiner, BlogCardTitle } from './index.styled';
import ReadMoreButton from '../../../blog-details/ReadMoreButton';

interface IProps {
	title: string
	date: string
	hovered: boolean
}

const BlogCardDetails: FC<IProps> = (props: IProps) => {
	const { title, date, hovered } = props;

	return (
		<Flex width='100%' p={4} my={{sm: 0, md: 2}} gap={2}>
			<BlogCardTitle hovered={hovered}>{title}</BlogCardTitle>
			<Divider sx={{ width: '100%', my: 1 }} />
			<BlogCardActionContiner>
				<Typography color='gray' fontSize='20px'>{date}</Typography>
				<ReadMoreButton hovered={hovered} />
			</BlogCardActionContiner>
		</Flex>
	);
};

export default BlogCardDetails;