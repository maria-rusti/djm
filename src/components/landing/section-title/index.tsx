import { FC } from 'react';
import { TypographyProps } from '@mui/material';
import { SectionTitleTypho } from './index.styled';

const SectionTitleSG: FC<TypographyProps> = ({
	variant = 'h4',
	textAlign,
	...props
}: TypographyProps): React.ReactElement => (
	<SectionTitleTypho component='p' variant={variant} textAlign={textAlign} {...props} />
);

SectionTitleSG.defaultProps = {
	textAlign: 'center',
};

export { SectionTitleSG };
