import { Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const SectionBadgeTypho: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)
(({ theme }) => ({
	color: theme.palette.primary.main,
	padding: theme.spacing(1, 3),
	minWidth: theme.spacing(3),
	width: 'fit-content',
	backgroundColor: theme.palette.grey[200],
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[2],
}));

const SectionBadgeSG: FC<TypographyProps> = ({
	variant = 'h3',
	...props
}: TypographyProps): React.ReactElement => <SectionBadgeTypho variant={variant} {...props} />;

export { SectionBadgeSG };