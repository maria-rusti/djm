import React, { FC } from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
import { Icon } from '@mui/material';
import { uuid } from '../../../utils/functions';
import { ISourceIcons } from '../../../hooks/fetch-hooks/use-services/index.interfaces';
import Flex from '../wrapper/flex';

type SizeType = 'small' | 'medium' | 'large'

interface IProps {
	icon: ISourceIcons
	size: SizeType
	hovered?: boolean
}

const sizeValue = (sizeParam: SizeType): {width: number, height: number} => {
	switch(sizeParam){
		case 'small': {
			return {
				width: 30,
				height: 30
			};
		}
		case 'medium': {
			return {
				width: 40,
				height: 40
			};
		}
		case 'large': {
			return {
				width: 50,
				height: 50
			};
		}
		default: {
			return {
				width: 40,
				height: 40
			};
		}
	}
};

const SourceIcon: FC<IProps> = (props: IProps) => {
	const { icon, hovered, size } = props;


	return (
		<Flex width='60px' justifyCenter>
			{icon?.source === 'Iconify' &&
				<IconifyIcon
					name={uuid()}
					icon={icon?.name}
					style={{
						...sizeValue(size), scale: hovered ? '1.1' : '1',
						transition: 'all 0.3 ease-in-out'
					}}
				/>
			}
			{icon?.source === 'GoogleFonts' &&
				<Icon 
					style={{
						height: '50px', width: '50px', scale: hovered ? '1.1' : '1',
						transition: 'all 0.3 ease-in-out'
					}}
				>
					{icon?.name || 'summarize'}
				</Icon>
			}
		</Flex>
	);
};

SourceIcon.defaultProps = {
	hovered: false
};

export default SourceIcon;