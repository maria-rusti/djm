import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { IServiceResponse } from '../../../../../../hooks/fetch-hooks/use-services/index.interfaces';
import ServicesCardContent from './ServiceCardContent';
import { CardSG } from '../../../../../../components/common';

interface IProps {
	service: IServiceResponse;
}

const ServicesCard: FC<IProps> = (props: IProps) => {
	const { service } = props;
	const navigate = useNavigate();
	return (
		<CardSG
			onClick={(): void => navigate(`${service.path}`)}
			width={270}
			height={360}
			hover
			sx={{ cursor: 'pointer' }}
		>
			<ServicesCardContent service={service} />
		</CardSG>
	);
};

export default ServicesCard;
