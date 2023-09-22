import { Alert, IconButton, Snackbar } from '@mui/material';
import { Dispatch, FC, Fragment, ReactNode, SetStateAction } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { uuid } from '../../../utils/functions';
import useConsoleLog from '../../../hooks/use-console-log';
import MusicPlayer from './renderMusic';

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
			
					<MusicPlayer src={music} />
				</Alert>
			</Snackbar>
		</Fragment>
	);
};

export default MusicRenderer;
