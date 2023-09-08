interface ISourceIcons {
    name: string
    source: string
}

interface IProduct {
    name: string
    icon: ISourceIcons
}

interface IServiceResponse {
    _id: string;
    platform: string
    icon: ISourceIcons
    products: IProduct[]
}

export type { IServiceResponse, ISourceIcons, IProduct };
