import { FC } from 'react';
import { useTheme } from '@mui/material';
import { BlogImageBadge, BlogImageWrapper, StyledBlogImage } from './index.styled';

interface IProps {
	image: string
	platform: string
	hovered: boolean
}

const BlogImage: FC<IProps> = (props: IProps) => {
	const { image, platform, hovered } = props;
	const theme = useTheme();

	return (
		<BlogImageWrapper>
			<BlogImageBadge> {platform} </BlogImageBadge>
			<StyledBlogImage theme={theme} hovered={hovered} image={image} platform={platform} />
		</BlogImageWrapper>
	);
};

export default BlogImage;