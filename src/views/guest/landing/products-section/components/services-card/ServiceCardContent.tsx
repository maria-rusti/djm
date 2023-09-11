import React, { FC, useContext } from 'react';
import { Box, Typography } from '@mui/material';
// import { useNavigate } from 'react-router';
import { ButtonSG, Flex } from '../../../../../../components/common';
import SourceIcon from '../../../../../../components/common/source-icon';
import { capitalize, uuid } from '../../../../../../utils/functions';
import { IProduct, IServiceResponse } from '../../../../../../hooks/fetch-hooks/use-services/index.interfaces';
import { ServicesCardTitle } from './index.styled';
import nunta from '../../../../../../assets/video/music.mp3';
import MusicContext from '../../../../../../utils/context/video';

interface IProps {
	service: IServiceResponse;
}

const ServicesCardContent: FC<IProps> = (props: IProps) => {
	const { service } = props;
	const hovered = true;
	const { play } = useContext(MusicContext);

	return (
		<Flex width='100%' minHeight='100%' justifyContent='space-between' gap={3}>
			<Flex width='100%' gap={2}>
				<SourceIcon size='large' icon={service?.icon} hovered={hovered} />
				<ServicesCardTitle hovered={hovered}>{capitalize(service?.platform)}</ServicesCardTitle>
			</Flex>
			<Box display='flex' flexDirection='column' width='100%' minHeight='150px' gap={1}>
				{service?.products?.map((product: IProduct) => (
					<Flex key={uuid()}>
						<SourceIcon size='small' icon={product?.icon} />
						<Typography sx={{ userSelect: 'none' }}>{product?.name}</Typography>
					</Flex>
				))}
			</Box>
			<Flex width='100%' justifyCenter gap={2}>
				<ButtonSG variant='text' onClick={(): void => play(nunta)}>
					Read more
				</ButtonSG>
			</Flex>
		</Flex>
	);
};

export default ServicesCardContent;
