import { IconButton, Typography, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Flex } from '../../common';
import { uuid } from '../../../utils/functions';
import { IconBackground } from '../../../views/guest/landing/solution-section/card/index.styled';
import MusicContext from '../../../utils/context/video';

export interface IFeatureItem {
	icon: string;
	title: string;
	subTitle?: string;
	fullWidth?: boolean;
	music?: string;
}

const FeatureItem: React.FC<IFeatureItem> = ({ icon, title, subTitle, fullWidth, music }): JSX.Element => {
	const theme = useTheme();
	const { play } = useContext(MusicContext);
	return (
		<Flex
			width={fullWidth ? '100%' : theme.spacing(subTitle ? 50 : 33)}
			gap={3}
			key={`${uuid()}-ai-features`}
			alignContent='start'
		>
			<IconBackground>
				<IconButton onClick={(): void => play(music || '')}>
					<Icon icon={icon} width={theme.spacing(5)} color={theme.palette.primary.main} />
				</IconButton>
			</IconBackground>
			<Flex maxWidth='calc(100% - 90px)' gap={1}>
				<Typography fontWeight='bold' fontSize={18}>
					{title}
				</Typography>
				{subTitle && <Typography color={theme?.palette?.text?.secondary}>{subTitle}</Typography>}
			</Flex>
		</Flex>
	);
};

export default FeatureItem;
