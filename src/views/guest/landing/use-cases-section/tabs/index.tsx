import { Dispatch, SetStateAction } from 'react';
import { Icon } from '@iconify/react';
import { useMediaQuery, useTheme } from '@mui/material';
import { StyledTab, StyledTabs, TabsWrapper } from './index.styled';
import tabs from '../data/tabs.json';
import { uuid } from '../../../../../utils/functions';

interface IProps {
	setCurrentIndex: Dispatch<SetStateAction<number>>,
	currentIndex: number
};

const UseCasesTabs: React.FC<IProps> = ({ setCurrentIndex, currentIndex }): JSX.Element => {

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const handleChange = (_event: React.SyntheticEvent, newValue: number): void => {
		setCurrentIndex(newValue);
	};

	interface ITab {
		icon: string,
		title: string
	};

	return (
		<TabsWrapper>
			<StyledTabs
				value={currentIndex}
				onChange={handleChange}
				orientation='horizontal'
			>
				{(tabs as ITab[]).map(({ icon, title }: ITab, index: number): JSX.Element => (
					<StyledTab key={uuid()} icon={ <Icon icon={icon} width={!isMobile ? 50 : 40} /> }
						iconPosition='start' label={isMobile? undefined : title} value={index}
						disableFocusRipple disableRipple disableTouchRipple
					/>
				))}
			</StyledTabs>
		</TabsWrapper>
	);
};

export default UseCasesTabs;