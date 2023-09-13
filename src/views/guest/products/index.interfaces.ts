import { InformationSectionProps } from '../../../components/landing/products-page-section/information-section';

interface ProductsPageSectionPropsImages {
	information: InformationSectionProps,
	reverse: boolean
}
interface IProductContent {
    title: string,
    description: string,
    data: ProductsPageSectionPropsImages[]
}

export type { IProductContent };