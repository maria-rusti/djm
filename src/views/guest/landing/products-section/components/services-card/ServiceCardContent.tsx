import React, { FC } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { ButtonSG, Flex } from '../../../../../../components/common';
import SourceIcon from '../../../../../../components/common/source-icon';
import { capitalize, uuid } from '../../../../../../utils/functions';
import { IProduct, IServiceResponse } from '../../../../../../hooks/fetch-hooks/use-services/index.interfaces';
import { ServicesCardTitle } from './index.styled';
import { SolutionCardSubtitle } from '../../../solution-section/card/index.styled';

interface IProps {
	service: IServiceResponse;
}

const ServicesCardContent: FC<IProps> = (props: IProps) => {
	const { service } = props;
	const hovered = true;
	const navigate = useNavigate();

	return (
		<Flex width='100%' minHeight='100%' justifyContent='space-between' gap={3}>
			<Flex width='100%' gap={2}>
				<SourceIcon size='large' icon={service?.icon} hovered={hovered} />
				<ServicesCardTitle component='h4' hovered={hovered}>
					{capitalize(service?.platform)}
				</ServicesCardTitle>
			</Flex>
			<Box display='flex' flexDirection='column' width='100%' minHeight='150px' gap={1}>
				{service?.products?.map((product: IProduct) => (
					<Flex key={uuid()}>
						<SourceIcon size='small' icon={product?.icon} />
						<SolutionCardSubtitle sx={{ userSelect: 'none' }}>{product?.name}</SolutionCardSubtitle>
					</Flex>
				))}
			</Box>
			<Flex width='100%' justifyCenter gap={2}>
				<ButtonSG variant='text' onClick={(): void => navigate(`${service.path}`)}>
					View more
				</ButtonSG>
			</Flex>
		</Flex>
	);
};

export default ServicesCardContent;
