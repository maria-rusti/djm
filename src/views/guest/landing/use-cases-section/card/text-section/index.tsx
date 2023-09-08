import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import { Flex } from '../../../../../../components/common';
import { IconBackground } from '../../../solution-section/card/index.styled';
import { HeadingText } from '../../../components/hero-details/index.styled';
import { uuid } from '../../../../../../utils/functions';
import GetStartedButton from '../../../../../../components/landing/buttons/get-started-button';
import { TextSectionWrapper } from './index.styled';

interface IProps {
	icon: string,
	title: string,
	description: string,
	replaces: string[],
};

const TextSection: React.FC<IProps> = ({ icon, title, description, replaces }): JSX.Element => (
	<TextSectionWrapper>
		<IconBackground>
			<Icon icon={icon} width={50} />
		</IconBackground>
		<Flex gap={3}>
			<HeadingText>{title}</HeadingText>
			{description.split('/n').map((paragraph: string): JSX.Element => (
				<Box key={`${uuid()}-parent`}>
					{paragraph.split('/br').map((sentence: string): JSX.Element => (
						<Typography color='grey' fontSize={19} key={`${uuid()}-child`}>
							{sentence}
						</Typography>
					))}
				</Box>
			))}
			<Flex>
				<Typography component='span' color='grey'>
					Replaces: {' '}
				</Typography>
				<Typography> {replaces.join(' | ')}</Typography>
			</Flex>
		</Flex>
		<Box>
			<GetStartedButton />
		</Box>
	</TextSectionWrapper>
);

export default TextSection;