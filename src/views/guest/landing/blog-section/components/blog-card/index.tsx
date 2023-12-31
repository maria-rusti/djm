import { FC } from 'react';
import { BlogCardContiner } from './index.styled';
import { BlogObjectProps } from '../../index.interfaces';
import BlogImage from './components/blog-image';
import BlogCardDetails from './components/blog-card-details';
import { useHover } from '../../../../../../hooks/use-hovered';

interface IProps {
	blog: BlogObjectProps
	image: string
}

const BlogCard: FC<IProps> = (props: IProps) => {
	const { blog, image } = props;

	const { hovered, elementRef } = useHover();

	return (
		<BlogCardContiner ref={elementRef} hovered={hovered}>
			<BlogImage hovered={hovered} image={image} platform={blog?.platform} />
			<BlogCardDetails date={blog?.date} title={blog?.title} hovered={hovered} />
		</BlogCardContiner>
	);
};

export default BlogCard;