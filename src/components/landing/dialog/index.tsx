import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogActions, IconButton, Typography } from '@mui/material';
import { ButtonSG } from '../../common';

export interface ResDialog {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	service: string;
}
const ResponsiveDialogContent: React.FC<ResDialog> = ({ open, setOpen, service }): JSX.Element => (
	<Box sx={{ position: 'relative' }}>
		<Dialog open={open} onClose={(): void => setOpen(false)}>
			<DialogTitle
				id='responsive-dialog-title'
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<IconButton onClick={(): void => setOpen(!open)}>
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
				<Typography>{service}</Typography>
			</DialogContent>
			<DialogActions>
				<ButtonSG>{service}</ButtonSG>
			</DialogActions>
		</Dialog>
	</Box>
);

export default ResponsiveDialogContent;
