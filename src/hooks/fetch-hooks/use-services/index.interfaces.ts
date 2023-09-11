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
    path: string
}

export type { IServiceResponse, ISourceIcons, IProduct };
