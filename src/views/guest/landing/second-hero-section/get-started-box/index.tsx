import { Box } from '@mui/material';
import GetStartedBox from '../../../../../components/landing/get-started-box';
import { GetStartedBoxDecorations } from '../../../../../components/landing/get-started-box/index.interfaces';
import { HeadingText } from '../../components/hero-details/index.styled';
import GetStartedButton from '../../../../../components/landing/buttons/get-started-button';
import { GetStartedBoxContent } from './index.styled';
import { uuid } from '../../../../../utils/functions';
import SectionWrapperSG from '../../../../../components/landing/section-wrapper';

const dots: GetStartedBoxDecorations[] = [{
	top: '-20%',
	left: '10%',
	type: 'dots'
}, {
	top: '-15%',
	left: '70%',
	type: 'dots'
}, {
	top: '80%',
	left: '40%',
	type: 'dots'
}, {
	top: '90%',
	left: '90%',
	type: 'dots'
}];

const texts = ['Ready to get started?', 'Create an account for free!'];

const FirstGetStartedBox: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='get-started-section' half>
		<GetStartedBox decorations={dots}>
			<GetStartedBoxContent>
				<Box>
					{texts.map((item) => (
						<HeadingText key={uuid()} color='#fff'>{item}</HeadingText>
					))}
				</Box>
				<Box>
					<GetStartedButton white />
				</Box>
			</GetStartedBoxContent>
		</GetStartedBox>
	</SectionWrapperSG>

);

export default FirstGetStartedBox;