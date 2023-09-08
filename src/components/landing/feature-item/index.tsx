import { Typography, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { Flex } from '../../common';
import { uuid } from '../../../utils/functions';
import { IconBackground } from '../../../views/guest/landing/solution-section/card/index.styled';

export interface IFeatureItem {
	icon: string,
	title: string,
	subTitle?: string
	fullWidth?: boolean
}

const FeatureItem: React.FC<IFeatureItem> = ({ icon, title, subTitle, fullWidth }): JSX.Element => {
	const theme = useTheme();
	return (
		<Flex width={ fullWidth ? '100%' : theme.spacing(subTitle ? 50 : 33)} gap={3} 
			key={`${uuid()}-ai-features`} alignContent='start'>
			<IconBackground>
				<Icon icon={icon} width={theme.spacing(5)} color={theme.palette.primary.main} />
			</IconBackground>
			<Flex maxWidth='calc(100% - 90px)' gap={1}>
				<Typography fontWeight='bold' fontSize={18}>{title}</Typography>
				{subTitle && <Typography color={theme?.palette?.text?.secondary}>{subTitle}</Typography>}
			</Flex>
		</Flex>
	);
};

export default FeatureItem;