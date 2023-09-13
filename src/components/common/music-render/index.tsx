import { Alert, CardMedia, IconButton, Snackbar } from '@mui/material';
import { Dispatch, FC, Fragment, ReactNode, SetStateAction } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { uuid } from '../../../utils/functions';
import useConsoleLog from '../../../hooks/use-console-log';

const action = (callback: () => void): ReactNode => (
	<IconButton size='small' aria-label='close' color='inherit' onClick={callback}>
		<CloseIcon fontSize='small' />
	</IconButton>
);
interface IProps {
	music: string;
	setMusic: Dispatch<SetStateAction<string>>;
}

const MusicRenderer: FC<IProps> = ({ music, setMusic }): JSX.Element => {
	useConsoleLog(music);
	return (
		<Fragment key={uuid()}>
			<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={music !== ''}>
				<Alert action={action(() => setMusic(''))}>
					<CardMedia
						component='iframe'
						width='660'
						height='115'
						src={music}
						title='YouTube video player'
						allow={`accelerometer; autoplay; clipboard-write;
								 encrypted-media; gyroscope; picture-in-picture; web-share`}
						allowFullScreen
					/>
				</Alert>
			</Snackbar>
		</Fragment>
	);
};

export default MusicRenderer;
