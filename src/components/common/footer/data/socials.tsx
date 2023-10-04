import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactNode } from 'react';

export interface FooterSocial {
	url: string;
	icon: ReactNode | JSX.Element;
}

const FooterSocialsData: FooterSocial[] = [
	{
		url: 'https://www.instagram.com/direct/t/100957321307224/',
		icon: <InstagramIcon />,
	},
	{
		url: 'https://www.facebook.com/MariusGageaDJM',
		icon: <FacebookIcon />,
	},
];

export default FooterSocialsData;
