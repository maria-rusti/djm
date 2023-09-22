import React, { FC } from 'react';
import { BlogContentContiner, BlogSectionWrapper } from './index.styld';
import BlogDetails from './components/blog-details';
import mokData from './data.mock.json';
import { BlogObjectProps } from './index.interfaces';
import BlogCard from './components/blog-card';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { SolutionWrapper } from '../solution-section/index.styled';
// import newImage from '../../../../assets/landingSection/new.jpg';
// import co from '../../../../assets/landingSection/co2.jpg';
// import artificii from '../../../../assets/landingSection/artificii.jpg';

const BlogSection: FC = () => {
	const arrayImage = [
		'https://storage.googleapis.com/sbdcloud/djm-1695385213960-co2.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385209740-artificii.jpg',
	];
	return (
		<SectionWrapperSG sectionName='articles-section'>
			<SolutionWrapper image='https://storage.googleapis.com/sbdcloud/djm-1695385225025-new.jpg'>
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
