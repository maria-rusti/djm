interface IFeature {
	icon: string;
	title: string;
	description: string;
}

interface IProductLinkCard {
	props: IFeature,
	page:  'servicii' | 'resources'
}

export type { IProductLinkCard, IFeature };