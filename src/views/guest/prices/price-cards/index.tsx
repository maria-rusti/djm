import usePackages from '../../../../hooks/fetch-hooks/use-package';
import { IPackage } from '../../../../hooks/fetch-hooks/use-package/index.interfaces';
import { uuid } from '../../../../utils/functions';
import { Flex } from '../../../../components/common';
import PriceCard from '../../../../components/landing/price-card';

const PriceCardSection: React.FC = (): JSX.Element => {
	const { data } = usePackages(undefined, true);
	return (
		<Flex gap={4} flexWrap='wrap' justifyCenter maxWidth={1200} padding={5}>
			{data.length > 0 && data.map((cardData: IPackage): JSX.Element => (
				<PriceCard key={uuid()} {...cardData} />
			))}
		</Flex>
	);
};

export default PriceCardSection;