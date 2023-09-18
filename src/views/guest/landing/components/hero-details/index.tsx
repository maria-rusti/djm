/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable consistent-return */
import React, { FC, useEffect, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import { Flex } from '../../../../../components/common';
import { SectionTitleDistinctSG } from '../../../../../components/landing/section-title/index.styled';
import './index.styled.css';
import Textra from './text-animation';
import { useWindowSize } from '../../../../../hooks/use-window-size';

const HeroDetails: FC = () => {
	const theme = useTheme();
	const { width } = useWindowSize();

	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

	useEffect(() => {
		if (currentLetterIndex <= 1) {
			const typingTimeout = setTimeout(() => {
				setCurrentLetterIndex(currentLetterIndex + 1);
			}, 200);
			return () => clearTimeout(typingTimeout);
		}
		setCurrentLetterIndex(0);
		setCurrentWordIndex((prevIndex) => prevIndex + 1);
	}, [currentLetterIndex]);

	useEffect(() => {
		setCurrentLetterIndex(0);
	}, [currentWordIndex]);

	return (
		<Flex column gap={theme.spacing(4)} justifyCenter>
			<Flex gap={theme.spacing(10)} justifyCenter>
				<Flex
					sx={{
						minHeight: theme.spacing(15),
						width: '100%',
						mt: theme.spacing(3),
					}}
					column
					justifyCenter
				>
					<Flex>
						<Typography
							variant='h1'
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								fontWeight: 500,
								// eslint-disable-next-line no-nested-ternary
								fontSize: width > 410 ? 45 : width > 210 ? 50 : 45,
							}}
						>
							<SectionTitleDistinctSG>
								<Textra
									effect='press'
									stopduration='1000'
									data={['DJ', 'SONORIZARE', 'LUMINI', 'FRESH 360', 'COCKTAIL']}
								/>
							</SectionTitleDistinctSG>
						</Typography>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeroDetails;
