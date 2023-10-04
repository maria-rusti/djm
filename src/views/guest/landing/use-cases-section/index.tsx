import { useState } from 'react';
import UseCasesTabs from './tabs';
import UseCaseCard from './card';
import cards from './data/cards.json';
import { UseCaseSectionWrapper } from './index.styled';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import CasesTitle from './cases-title';
import { SolutionWrapper } from '../solution-section/index.styled';

const UseCasesSection: React.FC = (): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const imagesArray = [
		'https://storage.googleapis.com/sbdcloud/djm-1695385227240-sectionNunta.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385213323-botezBaby.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385222250-majorat.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385209057-aniversare.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385216789-formatii.jpg',
		'https://storage.googleapis.com/sbdcloud/djm-1695385226467-photo.jpg',
	];

	return (
		<SectionWrapperSG sectionName='use-cases-section'>
			<SolutionWrapper image={imagesArray[currentIndex]}>
				<CasesTitle />
				<UseCaseSectionWrapper>
					<Flex width='100%'>
						<UseCaseCard
							currentIndex={currentIndex}
							{...cards[currentIndex]}
							image={imagesArray[currentIndex]}
						/>
					</Flex>
					<UseCasesTabs currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
				</UseCaseSectionWrapper>
			</SolutionWrapper>
		</SectionWrapperSG>
	);
};

export default UseCasesSection;
