interface ISocialData {
    type: string;
    content: string;
};

interface ISocial {
    platform: Platform
    icon: string
    description: string
    image: string
    data: ISocialData[]
};

type Platform = 'Facebook' | 'Instagram' | 'Reddit' | 'Threads' | 'Youtube' | 'Tiktok' | 'Pinterest' | 'Google Business'

export type { ISocialData, ISocial, Platform };
