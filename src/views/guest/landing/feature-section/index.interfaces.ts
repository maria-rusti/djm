interface IFeature {
	icon: string;
	title: string;
	description: string;
}

interface IProductLinkCard {
	props: IFeature,
	page:  'products' | 'socials' | 'resources'
}

export type { IProductLinkCard, IFeature };