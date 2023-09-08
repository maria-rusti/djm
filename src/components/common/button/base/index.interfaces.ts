import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonPropsSG extends ButtonProps {
	children?: string | ReactNode;
	shadow?: boolean;
	hover?: boolean;
	width?: number | string;
}

export type { ButtonPropsSG };
