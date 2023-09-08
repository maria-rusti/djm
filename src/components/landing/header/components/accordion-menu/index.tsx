import {
	AccordionDetails, ListItem,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { stateSetter } from '../../../../../utils/types/state';
import { AccordionSummary, NavAccordion } from './index.styled';
import { DataItem } from '../../../../common/modal';

interface IProps {
	setIsOpened: stateSetter<boolean>;
	data: DataItem[];
}

const AccordionMenu: React.FC<IProps> = ({
	data,
	setIsOpened,
}): JSX.Element => {
	const [expanded, setExpanded] = useState<number | false>(false);

	const handleChange =
		(panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			event.stopPropagation();
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<>
			{data.map(({ title, content, id }) => (
				<ListItem
					onClick={(e: React.MouseEvent): void => e.stopPropagation()}
					disablePadding
					key={`${title}-${id}`}
				>
					<NavAccordion
						elevation={0}
						onChange={handleChange(id)}
						expanded={expanded === id}
					>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} color='primary' />}
							sx={{ p: 0 }}>
							{title}
						</AccordionSummary>
						<AccordionDetails onClick={(): void => {
							setIsOpened(false);
							setExpanded(false);
						}}>{content}</AccordionDetails>
					</NavAccordion>
				</ListItem>
			))}
		</>
	);
};

export default AccordionMenu;
