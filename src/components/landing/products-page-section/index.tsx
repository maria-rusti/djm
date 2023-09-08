import { FloatingImageProps } from '../../../views/guest/landing/second-hero-section/index.interfaces';
import ImageSection from './image-section';
import { ProductsPageSectionWrapper } from './index.styled';
import InformationSection, { InformationSectionProps } from './information-section';

export interface ProductsPageSectionProps {
	information: InformationSectionProps,
	images: FloatingImageProps[],
	reverse: boolean
}

const ProductsPageSection: React.FC<ProductsPageSectionProps> = ({ information, images, reverse }): JSX.Element => (
	<ProductsPageSectionWrapper reverse={reverse}>
		<ImageSection images={images} />
		<InformationSection {...information} />
	</ProductsPageSectionWrapper>
);

export default ProductsPageSection;