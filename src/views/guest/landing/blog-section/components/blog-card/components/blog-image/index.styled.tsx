import { FC } from 'react';
import { Box, BoxProps, Theme, Typography, TypographyProps, styled } from '@mui/material';

interface IProps {
	image: string
	platform: string
	hovered: boolean
	theme: Theme
}

const StyledBlogImage: FC<IProps> = ({ image, platform, hovered, theme }: IProps) =>
	<Box component='img' alt={platform} src={image} style={{
		width: '100%', height: '100%', objectFit: 'cover',
		transition: theme.transitions.create(['all'], {
			duration: theme.transitions.duration.standard,
		}),
		scale: hovered ? '1.05' : '1'
	}} />;

const BlogImageWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)
(({ theme }) => ({
	width: '100%',
	maxHeight: theme?.spacing(44),
	height: 'auto',
	borderRadius: `${theme?.shape.borderRadius}px ${theme?.shape.borderRadius}px 0 0`,
	overflow: 'hidden',
	position: 'relative',
}));

const BlogImageBadge: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	position: 'absolute',
	backgroundColor: theme?.palette?.background?.default,
	top: theme?.spacing(3),
	right: theme?.spacing(3),
	zIndex: '2',
	border: '1px solid #eff0f6',
	borderRadius: theme?.shape?.borderRadius,
	padding: theme?.spacing(1, 4),
}));


export { StyledBlogImage, BlogImageWrapper, BlogImageBadge };