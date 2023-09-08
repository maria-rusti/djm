import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import { FC, MouseEvent, ReactElement, useId } from 'react';
import { useTranslation } from 'react-i18next';

export interface PinTogglePropsSG {
	onClick: () => void;
	pinned?: boolean;
	tooltip?: string;
}

interface WrapperProps {
	tooltip: PinTogglePropsSG['tooltip'];
	children: ReactElement;
}

const Wrapper: FC<WrapperProps> = ({ tooltip, children }): JSX.Element =>
	tooltip ? <Tooltip title={tooltip}>{children as ReactElement}</Tooltip> : children;

const PinToggleSG: FC<PinTogglePropsSG> = ({ onClick, pinned, tooltip }): JSX.Element => {
	const id = useId();
	const { t } = useTranslation();

	return (
		<Wrapper tooltip={(pinned ? tooltip : t('add_to_favorites')) as string}>
			<Icon
				id={id}
				fontSize={20}
				icon={pinned ? 'typcn:pin' : 'typcn:pin-outline'}
				onClick={(e: MouseEvent<SVGSVGElement>): void => {
					e.preventDefault();
					e.stopPropagation();
					onClick();
				}}
			/>
		</Wrapper>
	);
};

PinToggleSG.defaultProps = {
	pinned: false,
	tooltip: '',
};

export default PinToggleSG;
