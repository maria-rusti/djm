import { FC } from 'react';
import { FooterWrapper } from './wrapper/index.styled';
import FooterSocials from './socials';
import FooterSocialsData from './data/socials';

export interface FooterChildren {
	type: string;
	title: string;
	url: string;
}

export interface FooterItem {
	type: string;
	title: string;
	url: string;
	children: FooterChildren[];
}

const Footer: FC = (): JSX.Element => (
	<FooterWrapper>
		<FooterSocials socials={FooterSocialsData} />
	</FooterWrapper>
);

export default Footer;
