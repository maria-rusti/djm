import { ElementType, FC } from 'react';
import Flex, { FlexProps } from '../../common/wrapper/flex';

interface SectionWrapperProps extends FlexProps {
	sectionName: string
	half?: boolean
	component?: ElementType<any>
}

const SectionWrapperSG: FC<SectionWrapperProps> = ({
	component = 'section',
	sectionName,
	half,
	...props
}: SectionWrapperProps): React.ReactElement =>
	<Flex id={sectionName} component={component as ElementType} minHeight={half ? '50vh' : '100vh'}
		width='100%' gap={8} justifyCenter {...props} />;

SectionWrapperSG.defaultProps = {
	half: false,
	component: 'section'
};

export default SectionWrapperSG;
