import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { IPackage } from '../../../../hooks/fetch-hooks/use-package/index.interfaces';
import { InitialPrice } from './index.styled';
import { Flex } from '../../../common';

type IProps = Omit<IPackage, 'initialPrice'>

const CreditSection: FC<IProps> =
	({ tokens, initialTokens, tokensBonus }): JSX.Element => (
		<Flex column justifyCenter height={200} gap={2}>
			<Box>
				<Typography variant='h3' color='primary'>
					{tokens}
				</Typography>
				<Typography>CREDITS</Typography>
			</Box>
			<Flex gap={5}>
				{initialTokens &&
					<Box>
						<InitialPrice>{initialTokens}</InitialPrice>
						<Typography variant='caption'>CREDITS</Typography>
					</Box>
				}
				{tokensBonus &&
					<Box>
						<Typography color='secondary' variant='h5'>
							{tokensBonus.value}{tokensBonus.type === 2 && '%'}
						</Typography>
						<Typography color='secondary' variant='caption'>MORE</Typography>
					</Box>
				}
			</Flex>
		</Flex>
	);

export default CreditSection;