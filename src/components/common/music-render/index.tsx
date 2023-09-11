import { Alert, CardMedia, Snackbar } from '@mui/material';
import { FC, Fragment, useEffect, useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import { uuid } from '../../../utils/functions';
import useConsoleLog from '../../../hooks/use-console-log';

// const action = (callback: () => void): ReactNode => (
// 	<IconButton size='small' aria-label='close' color='inherit' onClick={callback}>
// 		<CloseIcon fontSize='small' />
// 	</IconButton>
// );
interface IProps {
	music: string;
}

const MusicRenderer: FC<IProps> = ({ music }): JSX.Element => {
	// const [open, setOpen] = useState<boolean>(false);
	const [date, setDate] = useState<any>(new Date());
	useEffect(() => {
		// music !== '' && setOpen(true);
		setDate(new Date());
	}, []);
	// useConsoleLog(open);
	useConsoleLog(music);
	useConsoleLog(date);
	return (
		<Fragment key={uuid()}>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open
				// onClose={(): void => setOpen(!open)}
			>
				<Alert>
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
