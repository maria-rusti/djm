import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Box, CardMedia, IconButton } from '@mui/material';
import useConsoleLog from '../../../hooks/use-console-log';

export interface ResDialog {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	service: string;
}
const ResponsiveDialogContent: React.FC<ResDialog> = ({ open, setOpen, service }): JSX.Element => {
	useConsoleLog(open);
	const handleClose = (): void => {
		setOpen(false);
		console.log('da');
	};
	return (
		<Box sx={{ position: 'relative' }}>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle
					id='responsive-dialog-title'
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-end',
					}}
				>
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent
					sx={{
						overflowX: 'hidden',
						display: 'flex',
						height: '100%',
						flexDirection: 'column',
					}}
				>
					<CardMedia autoPlay component='video' src={service} />
				</DialogContent>
			</Dialog>
		</Box>
	);
};
export default ResponsiveDialogContent;
