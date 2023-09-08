import { FC } from 'react';
import { FloatingImageProps } from '../index.interfaces';
import { FloatingImageComponent } from '../index.styles';

interface StyledFloatingImageProps extends FloatingImageProps {
	cardImage?: boolean
}

const FloatingImage: FC<StyledFloatingImageProps> = ({
	src,
	cardImage,
	...props
}: StyledFloatingImageProps) =>
	<FloatingImageComponent cardImage={cardImage} 
		component='img' src={src} alt='floating-component' {...props} />;

FloatingImage.defaultProps = {
	cardImage: false,
};

export default FloatingImage ;