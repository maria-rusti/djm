import { Typography } from '@mui/material';
import { GreyText } from '../../../views/guest/prices/price-cards/index.styled';
import { Flex } from '../../common';
import GetStartedButton from '../buttons/get-started-button';
import { IPackage } from '../../../hooks/fetch-hooks/use-package/index.interfaces';
import CreditSection from './credit-section';
import { PriceCardContent, StyledPriceCard } from './index.styled';

const PriceCard: React.FC<IPackage> = (props): JSX.Element => {

	const { initialPrice, ...rest } = props;

	return (
		<StyledPriceCard hover>
			<PriceCardContent>
				<Typography fontSize='30px' fontWeight='bold' textAlign='center'>
					{initialPrice.value} {initialPrice.currency.toUpperCase()}
				</Typography>
				<CreditSection {...rest} />
				<Flex column justifyCenter gap={1}>
					<GetStartedButton />
					<GreyText>Get started for free</GreyText>
				</Flex>
			</PriceCardContent>
		</StyledPriceCard>
	);
};

export default PriceCard;