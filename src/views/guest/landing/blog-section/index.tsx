import React, { FC } from 'react';
import { BlogContentContiner, BlogSectionWrapper } from './index.styld';
import BlogDetails from './components/blog-details';
import mokData from './data.mock.json';
import { BlogObjectProps } from './index.interfaces';
import BlogCard from './components/blog-card';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SolutionWrapper } from '../solution-section/index.styled';
import newImage from '../../../../assets/landingSection/serviciiLanding.jpg';

const BlogSection: FC = () => (
	<SectionWrapperSG sectionName='articles-section'>
		<SolutionWrapper image={newImage}>
			<BlogSectionWrapper>
				<BlogDetails />
				<BlogContentContiner>
					{mokData?.map((blog: BlogObjectProps) => <BlogCard key={blog?._id} blog={blog} />)}
				</BlogContentContiner>
			</BlogSectionWrapper>
		</SolutionWrapper>
	</SectionWrapperSG>
);
export default BlogSection;
