
import { FC } from 'react';
import { Divider, DividerProps, styled } from '@mui/material';

const SectionDivider: FC<DividerProps> = styled(Divider)
(() => ({
	width: '100%',
	maxWidth: '1200px'
}));

export { SectionDivider };