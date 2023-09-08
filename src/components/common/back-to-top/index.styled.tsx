import { IconButton, IconButtonProps, keyframes, styled } from '@mui/material';
import { FC } from 'react';

interface BackToTopIconButtonProps extends IconButtonProps {
	showButton: boolean;
}

const jump = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const BackToTopIconButton: FC<BackToTopIconButtonProps> = styled(
	IconButton as FC<BackToTopIconButtonProps>,
	{
		shouldForwardProp: (prop: string) => prop !== 'showButton',
	}
)(({ theme, showButton }) => ({
	display: showButton ? 'block' : 'none',
	color: theme.palette.secondary.main,
	position: 'fixed',
	bottom: theme.spacing(5),
	right: theme.spacing(2),
	zIndex: 9999,
	animation: `${jump} 2s infinite`,
	// [theme.breakpoints.down('md')]: { bottom: theme.spacing(20) },
}));
