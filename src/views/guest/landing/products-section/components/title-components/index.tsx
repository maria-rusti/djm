import React, { FC } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { Flex } from '../../../../../../components/common';
import { ServicesSubtitle } from './index.styled';
import { DragSG } from '../../../../../../hooks/use-drag/index.interfaces';
import { SectionTitleSG } from '../../../../../../components/landing/section-title';
import { NextButton } from './move-button/index.styled';

interface ITitleProps {
	isDragged: DragSG;
	dataLength: number;
	handleNext: (action: 'prev' | 'next') => void;
}

const TitleComponent: FC<ITitleProps> = (props: ITitleProps) => {
	const { isDragged, dataLength, handleNext } = props;
	const theme = useTheme();
	const matchDownLG = useMediaQuery<string>(theme.breakpoints.down('lg'));

	return (
		<Flex width='100%' justifyCenter alignItems='center' gap={{ xs: 2, sm: 5 }}>
			<Flex column>
				<SectionTitleSG>Descoperiți serviciile noastre</SectionTitleSG>
				<ServicesSubtitle>Explorați diversele noastre servicii!</ServicesSubtitle>
			</Flex>
			<Flex gap={3}>
				<NextButton
					aria-labelledby='previous-slide'
					aria-label='previous-slide'
					title='previous'
					shadow
					hover
					variant='contained'
					disabled={isDragged?.prevScrollLeft > (matchDownLG ? -10 : 330)}
					sx={{ minWidth: '60px' }}
					onClick={(): void => handleNext('prev')}
				>
					<ArrowBack />
				</NextButton>
				<NextButton
					aria-labelledby='next-slide'
					aria-label='next-slide'
					title='next'
					shadow
					hover
					variant='contained'
					disabled={isDragged?.prevScrollLeft < -((dataLength || 0) * 380 - 650)}
					sx={{ minWidth: '60px' }}
					onClick={(): void => handleNext('next')}
				>
					<ArrowForward />
				</NextButton>
			</Flex>
		</Flex>
	);
};

export default TitleComponent;
