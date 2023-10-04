import React, { useEffect, useState } from 'react';
import { Popover, Box, useTheme, IconButton, List, ListItem, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Flex from '../wrapper/flex';
import { NavText } from '../../landing/header/components/NavButton';

export type DataItem = {
	id: number;
	title: string | JSX.Element;
	content: string | JSX.Element;
};

interface PopoverComponentProps {
	data: DataItem[];
	displayArrow?: boolean;
}

export interface IAnchor {
	id: number;
	anchor: React.ReactNode;
}

const PopoverComponent: React.FC<PopoverComponentProps> = ({ data, displayArrow }) => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
	const theme = useTheme();

	const handleClick = (event: React.MouseEvent<HTMLElement>, itemId: number | null): void => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
		setSelectedItemId(itemId);
	};

	const handleClose = (): void => {
		setOpen(false);
		setAnchorEl(null);
		setSelectedItemId(null);
		console.log('test');
	};

	const anchors: IAnchor[] = [{ id: 1, anchor: <NavText>Servicii</NavText> }];

	const selectedItem = data.find((item) => item.id === selectedItemId);

	useEffect(() => {
		if (open) {
			document.addEventListener('scroll', handleClose);
		} else {
			document.removeEventListener('scroll', handleClose);
		}

		return () => {
			document.removeEventListener('scroll', handleClose);
		};
	}, [open]);

	return (
		<>
			<List sx={{ display: 'flex', flexDirection: 'row', gap: theme.spacing(2) }} disablePadding>
				{anchors.map((anchor, index) => (
					<ListItem
						key={`${anchor.id}-header-anchor`}
						sx={{ m: 0, p: 0 }}
						onClick={(event): void => handleClick(event, data[index].id)}
					>
						{anchor.anchor}
						{displayArrow && (
							<IconButton
								size='small'
								aria-label='expand menu'
								sx={{
									transform: open && selectedItemId === data[index].id ? 'rotate(180deg)' : 'none',
									transition: 'transform 0.3s ease-in-out',
									mt: theme.spacing(2),
									p: theme.spacing(0),
									display: { xs: 'none', lg: 'block' },
									color: theme.palette.background.default,
								}}
							>
								<ArrowDropDownIcon />
							</IconButton>
						)}
					</ListItem>
				))}
			</List>
			<Popover
				id='anchor-id'
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transitionDuration={500}
				disableScrollLock
				disablePortal
				disableRestoreFocus
			>
				<Box
					sx={{ minWidth: theme.spacing(45), minHeight: theme.spacing(20), width: 'auto' }}
					onMouseLeave={(): void => handleClose()}
				>
					{selectedItem && (
						<ListItem>
							{typeof selectedItem.content === 'string' ? (
								<ListItemText primary={selectedItem.title} secondary={selectedItem.content} />
							) : (
								<Box onClick={(): void => handleClose()}>{selectedItem.content}</Box>
							)}
						</ListItem>
					)}
				</Box>
			</Popover>
		</>
	);
};

PopoverComponent.defaultProps = {
	displayArrow: false,
};

export default PopoverComponent;
