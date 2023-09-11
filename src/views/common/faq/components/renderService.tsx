/* eslint-disable react/jsx-no-useless-fragment */
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';
import { IServiceResponse } from '../../../../hooks/fetch-hooks/use-services/index.interfaces';
import { StyledCardPlatform } from '../index.styled';

const RenderCardService = ({
	service,
	index,
	serviceSelected,
	onSelect,
}: {
	service: IServiceResponse;
	index: number;
	serviceSelected: string;
	onSelect: (value: string) => void;
}): JSX.Element => {
	const { t } = useTranslation();
	return (
		<StyledCardPlatform
			selected={serviceSelected === service.platform}
			key={`${service.platform}`}
			onClick={(): void => onSelect(service.platform)}
		>
			<Icon icon={service.icon.name} width={50} height={40} />
			<Typography variant='h6' component='h3' sx={{ paddingLeft: '10px' }}>
				{t(service.platform, [index])}
			</Typography>
		</StyledCardPlatform>
	);
};

const MapRenderServices = ({
	dataArr,
	serviceSelected,
	onSelect,
}: {
	dataArr: IServiceResponse[];
	serviceSelected: string;
	onSelect: (value: string) => void;
}): JSX.Element => (
	<>
		{dataArr
			?.concat([
				{
					path: '',
					platform: 'All',
					_id: '',
					icon: {
						name: 'fluent-mdl2:all-apps',
						source: 'Iconify',
					},
					products: [],
				},
			])
			.reverse()
			.map((service: IServiceResponse, index: number) => (
				<RenderCardService
					key={`${service.platform}-${service.icon.name}`}
					service={service}
					index={index}
					serviceSelected={serviceSelected}
					onSelect={onSelect}
				/>
			))}
	</>
);
export default MapRenderServices;
