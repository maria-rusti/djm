import { ElementType, FC } from 'react';
import { Box } from '@mui/material';
import Flex, { FlexProps } from '../../common/wrapper/flex';
// import landingHeader from '../../../assets/landingSection/landingheader.jpg';

interface SectionWrapperProps extends FlexProps {
	sectionName: string;
	half?: boolean;
	component?: ElementType<any>;
}

const SectionWrapperSG: FC<SectionWrapperProps> = ({
	component = 'section',
	sectionName,
	half,
	...props
}: SectionWrapperProps): React.ReactElement => {
	const backgroundImageStyle = {
		backgroundImage: 'url(https://storage.googleapis.com/sbdcloud/djm-1695385218712-landingheader.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
	};

	return (
		<>
			<Box sx={backgroundImageStyle} />
			<Flex
				id={sectionName}
				component={component as ElementType}
				minHeight={half ? '50vh' : '10vh'}
				width='100%'
				justifyCenter
				sx={{ position: 'relative' }}
				{...props}
			/>
		</>
	);
};

SectionWrapperSG.defaultProps = {
	half: false,
	component: 'section',
};

export default SectionWrapperSG;
