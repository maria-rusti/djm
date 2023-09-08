import { Box } from '@mui/material';
import { GetStartedBoxDecorations, GetStartedBoxDecorationsType, GetStartedBoxProps } from './index.interfaces';
import { StyledGetStartedBox } from './index.styled';
import { AbsoluteImage } from '../../../views/guest/landing/second-hero-section/index.styles';
import { uuid } from '../../../utils/functions';
import images from '../../../assets/svg/images.json';

const handleImage = (type: GetStartedBoxDecorationsType): string => {
	switch (type) {
		case 'dots': {
			return images?.dots;
		}
		default: {
			return '';
		}
	}
};

const GetStartedBox: React.FC<GetStartedBoxProps> = ({ decorations, children, big = false, ...props }): JSX.Element => (
	<StyledGetStartedBox decorations={decorations} big={big} {...props}>
		<Box position='relative' width='100%' height='100%' margin='0 auto' >
			{decorations && decorations.map(({ top, left, type }: GetStartedBoxDecorations): JSX.Element => (
				<AbsoluteImage alt='decorations' key={`${uuid()}-dots`} top={top} 
					left={left} src={handleImage(type)} />
			))}
			{children}
		</Box>
	</StyledGetStartedBox>
);

export default GetStartedBox;