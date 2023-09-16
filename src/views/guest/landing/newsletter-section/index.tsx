import { useTheme } from '@mui/material';
import { FC } from 'react';
import { NewsletterContent, NewsletterText } from './index.styled';
import GetStartedBox from '../../../../components/landing/get-started-box';
import { GetStartedBoxDecorations } from '../../../../components/landing/get-started-box/index.interfaces';
import NewsletterForm from './newsletter-form';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { Flex } from '../../../../components/common';
import { useWindowSize } from '../../../../hooks/use-window-size';

export interface IValuesProps {
	email: string;
	categories: string[];
}

const dots: GetStartedBoxDecorations[] = [
	{
		top: '-10%',
		left: '20%',
		type: 'dots',
	},
	{
		top: '-15%',
		left: '70%',
		type: 'dots',
	},
	{
		top: '100%',
		left: '40%',
		type: 'dots',
	},
	{
		top: '100%',
		left: '90%',
		type: 'dots',
	},
];

const Newsletter: FC = (): JSX.Element => {
	const theme = useTheme();
	const { width } = useWindowSize();
	const currentWidth = width > 600;
	return (
		<SectionWrapperSG sectionName='newsletter-section' half>
			<GetStartedBox decorations={dots}>
				<NewsletterContent>
					<NewsletterText sx={{ paddingLeft: currentWidth ? '10%' : '0' }} size='large' theme={theme}>
						Povestea Ta în Cuvinte
					</NewsletterText>
					<NewsletterText sx={{ paddingLeft: currentWidth ? '10%' : '0' }} size='small' theme={theme}>
						Împărtășește-ți Experiența cu Noi și Cu Alții
					</NewsletterText>
					<Flex justifyCenter width='100%' column sx={{ paddingTop: '5px' }}>
						<NewsletterForm />
					</Flex>
				</NewsletterContent>
			</GetStartedBox>
		</SectionWrapperSG>
	);
};

export default Newsletter;
