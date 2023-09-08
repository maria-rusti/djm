import { FC } from 'react';
import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';
import { ButtonPropsSG } from './index.interfaces';
import { StyledButtonSG } from './index.styled';

/**
 *
 * @param children is used for the children of the button - optional
 * @param shadow is used for the shadows of the button - optional
 * @param hover is used for the hover animation of the button - optional
 * @param width is used for the width of the button - optional
 * @exampleStart
	<Button
		shadow //optional
		hover //optional
		width={100} //optional
		name='Button'
		sx={{ mt: 2, width: '200px' }}
	>
	Click // children
	</Button>
 * @exampleEnd
 * @returns a JSX.Element that represent the Button component - reusable component
 */

const ButtonSG: FC<ButtonPropsSG> = ({ children, shadow, hover, width, ...other }) => (
	<StyledButtonSG
		sx={({ spacing }): SystemStyleObject<Theme> => ({
			width: width || spacing(30),
		})}
		shadow={!!shadow}
		hover={!!hover}
		{...other}>
		{children}
	</StyledButtonSG>
);

ButtonSG.defaultProps = {
	children: 'Click',
};

export default ButtonSG;
