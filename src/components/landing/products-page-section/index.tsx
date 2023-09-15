import { FloatingImageProps } from '../../../views/guest/landing/second-hero-section/index.interfaces';
import ImageSection from './image-section';
import { ProductsPageSectionWrapper } from './index.styled';
import InformationSection, { InformationSectionProps } from './information-section';

export interface ProductsPageSectionProps {
	information: InformationSectionProps;
	reverse: boolean;
}
interface IProps {
	item: ProductsPageSectionProps;
	service: string;
	images: FloatingImageProps[];
}

const ProductsPageSection: React.FC<IProps> = ({ item, service, images }): JSX.Element => {
	const { information, reverse } = item;
	return (
		<ProductsPageSectionWrapper reverse={reverse}>
			<ImageSection images={images} />
			<InformationSection item={information} service={service} />
		</ProductsPageSectionWrapper>
	);
};

export default ProductsPageSection;
