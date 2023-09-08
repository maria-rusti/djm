interface IPackage {
	name: string;
	description: string;
	tokens: number;
	initialPrice: IPackagePrice;
	discount: IPackageDiscount;
	initialTokens: number;
	tokensBonus: IBonusTokens
};

interface IResponsePackage {
	_id: string;
	name: string;
	description: string;
	tokens: number;
	initialPrices: IPackagePrice[];
	discount: IPackageDiscount;
	discounts: IPackageDiscount[];
	finalPrices: IPackagePrice[];
}

interface IBonusTokens {
	type: 1 | 2;
	value: number;
}

interface IPackagePrice {
	currency: CurrencyOptions;
	value: number;
	_id?: string;
}

interface IPackageDiscount {
	type: 0 | 1 | 2;
	value?: number;
	currency?: CurrencyOptions;
}

type CurrencyOptions = 'ron' | 'eur' | 'usd' | 'btc' | 'eth';


export type { IPackage, IResponsePackage, IPackagePrice, IPackageDiscount, CurrencyOptions };