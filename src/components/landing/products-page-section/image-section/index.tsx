import { uuid } from '../../../../utils/functions';
import FloatingImage from '../../../../views/guest/landing/second-hero-section/components/FloatingImage';
import { FloatingImageProps } from '../../../../views/guest/landing/second-hero-section/index.interfaces';
import { ImageSectionWrapper, ProductsImageWrapper } from './index.styled';

export interface ImageSectionProps {
	images: FloatingImageProps[]
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }): JSX.Element => (
	<ImageSectionWrapper>
		<ProductsImageWrapper >
			{images.map(({ src, ...rest }) => (
				<FloatingImage key={`${uuid()}-first-image`} src={src} {...rest} />
			))}
		</ProductsImageWrapper>
	</ImageSectionWrapper>
);

export default ImageSection;