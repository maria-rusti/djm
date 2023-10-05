import { IconButton, Typography, alpha, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { Flex } from '../../common';
import { uuid } from '../../../utils/functions';
import { IconBackground } from '../../../views/guest/landing/solution-section/card/index.styled';
import MusicContext from '../../../utils/context/video';
import ResponsiveDialogContent from '../dialog';
import useConsoleLog from '../../../hooks/use-console-log';

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
	landing?: boolean;
}

const FeatureItem: React.FC<IProps> = ({ feature, music, service, landing }): JSX.Element => {
	const { icon, title, subTitle, fullWidth } = feature;
	const theme = useTheme();
	const { play } = useContext(MusicContext);
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = (): void => {
		if (music) {
			play(music);
		} else {
			setOpen(true);
			console.log('parinte');
		}
	};
	useConsoleLog(open);
	return (
		<>
			{' '}
			<Flex
				width={fullWidth ? '100%' : theme.spacing(subTitle ? 50 : 33)}
				gap={3}
				key={`${uuid()}-ai-features`}
				alignContent='start'
				onClick={handleOpen}
				sx={{
					':hover': {
						backgroundColor: alpha(theme.palette.common.black, 0.9),
						cursor: 'pointer',
					},
					borderRadius: theme.shape.borderRadius,
				}}
			>
				<IconBackground>
					<IconButton aria-label='show more'>
						<Icon icon={icon} width={theme.spacing(5)} color={theme.palette.primary.main} />
					</IconButton>
				</IconBackground>
				<Flex maxWidth='calc(100% - 90px)' gap={1}>
					<Typography
						fontWeight='bold'
						color={landing ? theme?.palette.common.white : theme?.palette.common.black}
						fontSize={18}
					>
						{title}
					</Typography>
					{subTitle && <Typography color={theme?.palette?.text?.secondary}>{subTitle}</Typography>}
				</Flex>
			</Flex>
			<ResponsiveDialogContent open={open} setOpen={setOpen} service={service} />
		</>
	);
};

export default FeatureItem;
