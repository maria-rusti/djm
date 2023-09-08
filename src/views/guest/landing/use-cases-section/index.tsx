import { useState } from 'react';
import UseCasesTabs from './tabs';
import UseCaseCard from './card';
import cards from './data/cards.json';
import { UseCaseSectionWrapper } from './index.styled';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import CasesTitle from './cases-title';

const UseCasesSection: React.FC = (): JSX.Element => {

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<SectionWrapperSG sectionName='use-cases-section'>
			<CasesTitle />
			<UseCaseSectionWrapper>
				<Flex width='100%'>
					<UseCaseCard currentIndex={currentIndex} {...cards[currentIndex]} />
				</Flex>
				<UseCasesTabs currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
			</UseCaseSectionWrapper>
		</SectionWrapperSG>
	);
};

export default UseCasesSection;