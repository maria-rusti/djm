import { ProductsLinksWrapper } from './index.styled';
import ProductLinkCard from './card';
import { uuid } from '../../../../../utils/functions';
import { IFeature } from '../../../../../views/guest/landing/feature-section/index.interfaces';

interface IProps {
	links: IFeature[];
	page: 'products' | 'socials' | 'resources';
}

const HeaderLinks: React.FC<IProps> = ({ links, page }): JSX.Element => (
	// eslint-disable-next-line no-unneeded-ternary
	<ProductsLinksWrapper column={(page === 'resources') ? 'true' : undefined}>
		{links.map((item) => (
			<ProductLinkCard props={item} key={uuid()} page={page} />
		))}
	</ProductsLinksWrapper>
);

export default HeaderLinks;
