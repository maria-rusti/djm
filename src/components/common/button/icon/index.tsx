import React, { FC } from 'react';
import { Icon, IconButton, Theme, Tooltip } from '@mui/material';
import { Icon as IconifyIco } from '@iconify/react';
import { SystemStyleObject } from '@mui/system';
import { IconButtonPropsSG, Size, Variant, WrapperIconButtonPropsSG } from './index.interfaces';
import { uuid } from '../../../../utils/functions';

const sizes = ['small', 'medium', 'large'] as const;
const sizesMap: Record<Size, number> = {
	small: 3,
	medium: 4,
	large: 5,
};
const variants = ['default', 'primary', 'secondary'] as const;
const variantsMap = (theme: Theme): Record<Variant, string> => ({
	default: theme.palette.text.primary,
	primary: theme.palette.primary.main,
	secondary: theme.palette.secondary.main,
});
const Wrapper: FC<WrapperIconButtonPropsSG> = ({ tooltip, children }) =>
	tooltip ? <Tooltip title={tooltip}>{children}</Tooltip> : children;

/**
 *
 * @param name is used as id of the button - optional
 * Default is created by uuid.
 * @param icon name of the icon to show - required
 * Can be used any icon from:
 * -Mui: https://fonts.google.com/icons?selected=Material+Icons+Outlined:loyalty:&icon.set=Material+Icons
 * -Iconify: https://iconify.design/
 * @param onClick function called when the user clicks the button - required
 * @param iconify it needs to be true if you are using an iconify icon - optional
 * Default is false
 * @param size one of 'small', 'medium' and 'large' -optional
 * Default is 'medium'
 * @param variant one of 'default', 'primary' and 'secondary' - optional
 * Default is 'default'
 * @param tooltip text helper on hover - optional
 * @exampleStart
	<IconButtonSG 
		name='test-route-button'
		icon='akar-icons:check-box-fill' 
		iconify 
		onClick={console.log}
		size='medium' />
 * @exampleEnd
 * @returns a JSX.Element that represent the Button component - reusable component
 */

const IconButtonSG: FC<IconButtonPropsSG> = ({
	name = '',
	icon,
	onClick,
	iconify = false,
	size = 'medium',
	variant = 'default',
	tooltip = '',
}) => (
	<Wrapper tooltip={tooltip}>
		<IconButton
			id={name || uuid()}
			onClick={onClick}
			sx={(theme): SystemStyleObject<Theme> => ({
				height: theme.spacing(sizesMap[size]),
				width: theme.spacing(sizesMap[size]),
				color: variantsMap(theme)[variant],
			})}>
			{iconify ? (
				<IconifyIco
					name={name || uuid()}
					icon={icon}
					style={{ height: '100%', width: '100%', color: 'inherit' }}
				/>
			) : (
				<Icon>{icon}</Icon>
			)}
		</IconButton>
	</Wrapper>
);

export { sizes, variants };
export default IconButtonSG;
