import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { Flex } from '../../../../../../components/common';
import { IconBackground, SolutionCardSubtitle } from '../../../solution-section/card/index.styled';
import { HeadingText } from '../../../components/hero-details/index.styled';
import { uuid } from '../../../../../../utils/functions';
import GetStartedButton from '../../../../../../components/landing/buttons/get-started-button';
import { TextSectionWrapper } from './index.styled';

interface IProps {
	icon: string;
	title: string;
	description: string;
}

const TextSection: React.FC<IProps> = ({ icon, title, description }): JSX.Element => (
	<TextSectionWrapper>
		<IconBackground>
			<Icon icon={icon} width={50} />
		</IconBackground>
		<Flex gap={3}>
			<HeadingText>{title}</HeadingText>
			{description.split('/n').map(
				(paragraph: string): JSX.Element => (
					<Box key={`${uuid()}-parent`}>
						{paragraph.split('/br').map(
							(sentence: string): JSX.Element => (
								<SolutionCardSubtitle key={`${uuid()}-child`}>{sentence}</SolutionCardSubtitle>
							)
						)}
					</Box>
				)
			)}
		</Flex>
		<Box>
			<GetStartedButton />
		</Box>
	</TextSectionWrapper>
);

export default TextSection;
