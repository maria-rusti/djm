import { useState } from 'react';
import UseCasesTabs from './tabs';
import UseCaseCard from './card';
import cards from './data/cards.json';
import { UseCaseSectionWrapper } from './index.styled';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import CasesTitle from './cases-title';
import aniversare from '../../../../assets/images/aniversare.jpg';
import botezBaby from '../../../../assets/images/botezBaby.jpg';
import formatii from '../../../../assets/images/formatii.jpg';
import majorat from '../../../../assets/images/majorat.jpg';
import photo from '../../../../assets/images/photo.jpg';
import sectionNunta from '../../../../assets/images/sectionNunta.jpg';

const UseCasesSection: React.FC = (): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const imagesArray = [sectionNunta, botezBaby, majorat, aniversare, formatii, photo];

	return (
		<SectionWrapperSG sectionName='use-cases-section'>
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
		</SectionWrapperSG>
	);
};

export default UseCasesSection;
