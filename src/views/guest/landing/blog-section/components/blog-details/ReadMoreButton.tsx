import React, { FC } from 'react';
import { Typography, useTheme } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Flex } from '../../../../../../components/common';

interface IProps {
	hovered: boolean
}

const ReadMoreButton: FC<IProps> = ({ hovered }: IProps) => {
	const theme = useTheme();

	return (
		<Flex flexDirection='row'>
			<Typography color={theme?.palette?.primary?.main} sx={{ fontWeight: 700}}>
				Read more
			</Typography>
			<Flex p={hovered ? '0 8px 0 24px' : '0 24px 0 8px'} 
				sx={{ transition: 'all 0.2s ease-in-out'}}>
				<ArrowForward sx={{ color: theme?.palette?.primary?.main}} />
			</Flex>
		</Flex>
	);
};

export default ReadMoreButton;