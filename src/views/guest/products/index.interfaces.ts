import { InformationSectionProps } from '../../../components/landing/products-page-section/information-section';

interface ProductsPageSectionPropsImages {
	information: InformationSectionProps,
	reverse: boolean
    service: string
}
interface IProductContent {
    title: string,
    description: string,
    data: ProductsPageSectionPropsImages[]
}

export type { IProductContent };