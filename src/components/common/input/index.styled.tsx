import { TextField, Theme, styled } from '@mui/material';
import { Width } from '../../../utils/types/style';

const StyledInputSG = styled(TextField, {
	shouldForwardProp: (prop) => prop !== 'width',
})(({ width, theme }: { theme: Theme; width?: Width }) => ({
	width: width || theme.spacing(30),
}));

export { StyledInputSG };
