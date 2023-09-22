import { useState } from 'react';
import UseCasesTabs from './tabs';
import UseCaseCard from './card';
import cards from './data/cards.json';
import { UseCaseSectionWrapper } from './index.styled';
import { Flex } from '../../../../components/common';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import CasesTitle from './cases-title';
// import aniversare from '../../../../assets/images/aniversare.jpg';
// import botezBaby from '../../../../assets/images/botezBaby.jpg';
// import formatii from '../../../../assets/images/formatii.jpg';
// import majorat from '../../../../assets/images/majorat.jpg';
// import photo from '../../../../assets/images/photo.jpg';
// import sectionNunta from '../../../../assets/images/sectionNunta.jpg';
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
// import { Dispatch, SetStateAction } from 'react';
// import { Icon } from '@iconify/react';
// import { useMediaQuery, useTheme } from '@mui/material';
// import { StyledTab, StyledTabs, TabsWrapper } from './index.styled';
// import tabs from '../data/tabs.json';
// import { uuid } from '../../../../../utils/functions';
// import { SliderList } from '../../components/slide-show/SliderList';
// import { SliderItem } from '../../components/slide-show/SliderItem';

// interface IProps {
// 	setCurrentIndex: Dispatch<SetStateAction<number>>;
// 	currentIndex: number;
// }
// const sliderContainerStyle = {
// 	display: 'flex',
// 	overflowX: 'auto',
// 	width: '100%',
// 	WebkitOverflowScrolling: 'touch',
// 	scrollSnapType: 'x mandatory',
// 	msOverflowStyle: 'none',
// 	scrollbarWidth: 'none',
// 	'&::-webkit-scrollbar': {
// 		display: 'none',
// 	},
// };

// const sliderItemStyle = {
// 	flex: '0 0 auto',
// 	scrollSnapAlign: 'start',
// };

// const UseCasesTabs: React.FC<IProps> = ({ setCurrentIndex, currentIndex }): JSX.Element => {
// 	const theme = useTheme();
// 	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// 	const handleChange = (_event: React.SyntheticEvent, newValue: number): void => {
// 		setCurrentIndex(newValue);
// 	};

// 	interface ITab {
// 		icon: string;
// 		title: string;
// 	}

// 	return (
// 		<TabsWrapper>
// 			<StyledTabs
// 				variant='scrollable'
// 				scrollButtons='auto'
// 				aria-label='scrollable auto tabs example'
// 				value={currentIndex}
// 				onChange={handleChange}
// 				orientation='horizontal'
// 			>
// 				<SliderList
// 					direction='left'
// 					duration={105}
// 					sx={{ ...sliderContainerStyle, width: `${250 * (tabs?.length ?? 0)}px!important` }}
// 				>
// 					{(tabs as ITab[]).map(
// 						({ icon, title }: ITab, index: number): JSX.Element => (
// 							<SliderItem sx={{ sliderItemStyle }} key={`${title}-${uuid()}`}>
// 								<StyledTab
// 									key={uuid()}
// 									icon={<Icon icon={icon} width={!isMobile ? 50 : 40} />}
// 									iconPosition='start'
// 									label={isMobile ? title : title}
// 									value={index}
// 									disableFocusRipple
// 									disableRipple
// 									disableTouchRipple
// 								/>
// 							</SliderItem>
// 						)
// 					)}
// 				</SliderList>
// 			</StyledTabs>
// 		</TabsWrapper>
// 	);
// };

// export default UseCasesTabs;

export default UseCasesSection;
