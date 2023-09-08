import React, { FC } from 'react';
// import { useMediaQuery, useTheme } from '@mui/material';
import { IServiceResponse } from '../../../../../../hooks/fetch-hooks/use-services/index.interfaces';
import ServicesCardContent from './ServiceCardContent';
import { CardSG } from '../../../../../../components/common';
// import ServiceCardContiner from './ServiceCardContiner';

interface IProps {
	service: IServiceResponse
}

const ServicesCard: FC<IProps> = (props: IProps) => {
	const { service } = props;
	// const theme = useTheme();
	// const matchDownMD = useMediaQuery<string>(theme.breakpoints.down('md'));

	return (
		<>
			{/* {!matchDownMD && */}
			<CardSG width={350} height={360} hover sx={{ cursor: 'pointer' }}>
				<ServicesCardContent service={service} />
			</CardSG>
			{/* }
			{matchDownMD &&
				<ServiceCardContiner >
					<ServicesCardContent service={service} />
				</ServiceCardContiner>
			} */}
		</>
	);
};

export default ServicesCard;