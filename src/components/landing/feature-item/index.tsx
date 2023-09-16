import { IconButton, Typography, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { Flex } from '../../common';
import { uuid } from '../../../utils/functions';
import { IconBackground } from '../../../views/guest/landing/solution-section/card/index.styled';
import MusicContext from '../../../utils/context/video';
import ResponsiveDialogContent from '../dialog';

export interface IFeatureItem {
	icon: string;
	title: string;
	subTitle?: string;
	fullWidth?: boolean;
}
export interface IProps {
	feature: IFeatureItem;
	music?: string;
	service: string;
}

const FeatureItem: React.FC<IProps> = ({ feature, music, service }): JSX.Element => {
	const { icon, title, subTitle, fullWidth } = feature;
	const theme = useTheme();
	const { play } = useContext(MusicContext);
	const [open, setOpen] = useState<boolean>(false);
	
	return (
		<Flex
			width={fullWidth ? '100%' : theme.spacing(subTitle ? 50 : 33)}
			gap={3}
			key={`${uuid()}-ai-features`}
			alignContent='start'
		>
			<IconBackground>
				<IconButton onClick={music ? (): void => play(music) : (): void => setOpen(true)}>
					<Icon icon={icon} width={theme.spacing(5)} color={theme.palette.primary.main} />
				</IconButton>
			</IconBackground>
			<Flex maxWidth='calc(100% - 90px)' gap={1}>
				<Typography fontWeight='bold' fontSize={18}>
					{title}
				</Typography>
				{subTitle && <Typography color={theme?.palette?.text?.secondary}>{subTitle}</Typography>}
			</Flex>
			<ResponsiveDialogContent open={open} setOpen={setOpen} service={service} />
		</Flex>
	);
};

export default FeatureItem;
