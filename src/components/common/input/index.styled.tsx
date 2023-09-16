import { TextField, Theme, styled } from '@mui/material';
import { Width } from '../../../utils/types/style';

const StyledInputSG = styled(TextField, {
	shouldForwardProp: (prop) => prop !== 'width',
})(({ width, theme }: { theme: Theme; width?: Width }) => ({
	width: width || theme.spacing(30),
	background: '#fff',
	borderTopLeftRadius: '32px 32px',
	borderBottomLeftRadius: '32px 32px',
	borderTopRightRadius: '32px 32px',
	borderBottomRightRadius: '32px 32px',
}));

export { StyledInputSG };
