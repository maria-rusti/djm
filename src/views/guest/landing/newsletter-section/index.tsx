import {
	useTheme,
} from '@mui/material';
import { FC } from 'react';
import { NewsletterContent, NewsletterImage, NewsletterText } from './index.styled';
import GetStartedBox from '../../../../components/landing/get-started-box';
import { GetStartedBoxDecorations } from '../../../../components/landing/get-started-box/index.interfaces';
import NewsletterForm from './newsletter-form';
import SectionWrapperSG from '../../../../components/landing/section-wrapper';
import { Flex } from '../../../../components/common';

export interface IValuesProps {
	email: string;
	categories: string[];

};

const dots: GetStartedBoxDecorations[] = [{
	top: '-10%',
	left: '20%',
	type: 'dots'
}, {
	top: '-15%',
	left: '70%',
	type: 'dots'
}, {
	top: '100%',
	left: '40%',
	type: 'dots'
}, {
	top: '100%',
	left: '90%',
	type: 'dots'
}];

const Newsletter: FC = (): JSX.Element => {
	const theme = useTheme();
	return (
		<SectionWrapperSG sectionName='newsletter-section' half>
			<GetStartedBox decorations={dots}>
				<NewsletterImage src="https://storage.googleapis.com/sbdcloud/1689180842297-logo.png" alt='test' />
				<NewsletterContent>
					<NewsletterText size='large' theme={theme}>
						Subscribe to the SocialGod Newsletter and find out about limited-time discounts!
					</NewsletterText>
					<NewsletterText size='small' theme={theme}>
						By subscribing to the SocialGod newsletter, you confirm that you are over 16 years old.
					</NewsletterText>
					<Flex justifyCenter width='100%'>
						<NewsletterForm />
					</Flex>
				</NewsletterContent>
			</GetStartedBox>
		</SectionWrapperSG>
	);
};

export default Newsletter;
