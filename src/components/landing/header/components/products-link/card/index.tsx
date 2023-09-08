import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FeatureCard } from '../../../../../../views/guest/landing/feature-section';
import { IProductLinkCard } from '../../../../../../views/guest/landing/feature-section/index.interfaces';
import { uuid } from '../../../../../../utils/functions';

const ProductLinkCard: React.FC<IProductLinkCard> = ({ props, page }): JSX.Element => {
	const navigate = useNavigate();
	const [hover, setHover] = useState<boolean>();

	const { title } = props;
	const navLink: string = `/${page}/${title.toLowerCase().replace(/ /g, '-')}`;

	return (
		<FeatureCard
			key={uuid()}
			feature={props}
			small
			hover={hover}
			onMouseOver={(): void => setHover(true)}
			onMouseLeave={(): void => setHover(false)}
			onClick={(): void => navigate(navLink)}
		/>
	);
};

export default ProductLinkCard;
