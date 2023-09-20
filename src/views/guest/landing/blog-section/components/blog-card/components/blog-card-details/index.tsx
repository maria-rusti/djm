import React, { FC } from 'react';
import { Divider } from '@mui/material';
import { Flex } from '../../../../../../../../components/common';
import { BlogCardActionContiner, BlogCardTitle } from './index.styled';
import { SolutionCardSubtitle } from '../../../../../solution-section/card/index.styled';

interface IProps {
	title: string;
	date: string;
	hovered: boolean;
}

const BlogCardDetails: FC<IProps> = (props: IProps) => {
	const { title, date, hovered } = props;

	return (
		<Flex width='100%' p={4} my={{ sm: 0, md: 2 }} gap={2}>
			<BlogCardTitle hovered={hovered}>{title}</BlogCardTitle>
			<Divider sx={{ width: '100%', my: 1 }} />
			<BlogCardActionContiner>
				<SolutionCardSubtitle>{date}</SolutionCardSubtitle>
			</BlogCardActionContiner>
		</Flex>
	);
};

export default BlogCardDetails;
