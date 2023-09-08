import React, { FC } from 'react';
import { BlogDetailsWrapper, BlogTextWrapper } from './index.styled';
import { StyledBrowseButton } from '../browse-button/index.styled';

const BlogDetails: FC = () =>
	<BlogDetailsWrapper>
		<BlogTextWrapper>
			Take a look at our latest articles and resources
		</BlogTextWrapper>
		<StyledBrowseButton onClick={(): void => console.log('to be')}
			hover shadow>
			Browse blogs
		</StyledBrowseButton>
	</BlogDetailsWrapper>
	;

export default BlogDetails;