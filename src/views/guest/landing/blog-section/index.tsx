import React, { FC } from 'react';
import { BlogContentContiner, BlogSectionWrapper } from './index.styld';
import BlogDetails from './components/blog-details';
import mokData from './data.mock.json';
import { BlogObjectProps } from './index.interfaces';
import BlogCard from './components/blog-card';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SolutionWrapper } from '../solution-section/index.styled';
import newImage from '../../../../assets/landingSection/new.jpg';
import co from '../../../../assets/landingSection/co2.jpg';
import artificii from '../../../../assets/landingSection/artificii.jpg';

const BlogSection: FC = () => {
	const arrayImage = [co, artificii];
	return (
		<SectionWrapperSG sectionName='articles-section'>
			<SolutionWrapper image={newImage}>
				<BlogSectionWrapper>
					<BlogDetails />
					<BlogContentContiner>
						{mokData?.map((blog: BlogObjectProps, index: number) => (
							<BlogCard key={blog?._id} blog={blog} image={arrayImage[index]} />
						))}
					</BlogContentContiner>
				</BlogSectionWrapper>
			</SolutionWrapper>
		</SectionWrapperSG>
	);
};
export default BlogSection;
