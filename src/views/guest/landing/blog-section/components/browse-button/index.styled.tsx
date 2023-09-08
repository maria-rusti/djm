import { FC } from 'react';
import { styled } from '@mui/material';
import { ButtonSG } from '../../../../../../components/common';
import { ButtonPropsSG } from '../../../../../../components/common/button/base/index.interfaces';

const StyledBrowseButton: FC<ButtonPropsSG> = styled(ButtonSG as FC<ButtonPropsSG>)
(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.common.white,
	fontWeight: theme.typography.fontWeightBold,
	fontSize: '18px',
	padding: theme?.spacing(2, 5),
	width: 'auto',
	height: 'auto',
	borderRadius: theme.spacing(5),
	':hover': {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	}
}));

export { StyledBrowseButton };