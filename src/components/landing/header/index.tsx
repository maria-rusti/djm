import React, { FC, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { NavButton } from './components/NavButton';
import { LogoBoxAnimation } from './components/LogoBoxAnimation';
import { uuid } from '../../../utils/functions';
import Logo from '../../common/logo';
import { DisappearOnMobile, HeaderContent, HeaderWrapper, StyledHeaderToolbar } from './index.styled';
import GetStartedButton from '../buttons/get-started-button';
import LinkButton from './components/link-button';
import PopoverComponent, { DataItem } from '../../common/modal/index';
import AccordionMenu from './components/accordion-menu';
import HeaderLinks from './components/products-link';
import productsLinks from './data/products-links.json';
import { HeroSectionWrapper } from '../../common/hero-section/index.styled';

export interface ILinkButton {
	title: string;
	type: string;
	data: string;
}

interface LandingHeaderFCInterface {
	transparent?: boolean;
}

const drawerWidth = '100%';
const navLinks: ILinkButton[] = [{ title: 'Contact', type: 'link', data: '/contact' }];

const dataArray: DataItem[] = [
	{
		id: 1,
		title: <Typography>Servicii</Typography>,
		content: <HeaderLinks links={productsLinks} page='servicii' />,
	},
];

export const LOGO = 'https://storage.googleapis.com/sbdcloud/1688720650889-socialgod-logo.png';

const LandingHeader: FC<LandingHeaderFCInterface> = ({ transparent = false }): JSX.Element => {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleDrawerToggle = (): void => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<HeroSectionWrapper reverseGradient={false}>
			<Box onClick={handleDrawerToggle}>
				<Box
					sx={{
						justifyContent: 'space-between',
						width: '100%',
						paddingLeft: '5px',
						display: 'flex',
					}}
				>
					<LogoBoxAnimation>
						<Box component='img' alt='social-god' sx={{ width: '150px', height: 'auto' }} src={LOGO} />
					</LogoBoxAnimation>
					<IconButton size='large'>
						<Close />
					</IconButton>
				</Box>
				<Box marginLeft={3}>
					<List>
						{navLinks.map((item) => (
							<ListItem key={`item-name-${uuid()}`} disablePadding>
								<NavButton key={item.title} to={item.data}>
									{item.title}
								</NavButton>
							</ListItem>
						))}
						<AccordionMenu data={dataArray} setIsOpened={setMobileOpen} />
					</List>
				</Box>
			</Box>
		</HeroSectionWrapper>
	);

	return (
		<HeaderContent transparent={transparent}>
			<HeaderWrapper>
				<HeroSectionWrapper reverseGradient={false}>
					<StyledHeaderToolbar>
						<LogoBoxAnimation onClick={(): void => navigate('/')}>
							<Logo />
						</LogoBoxAnimation>
						<DisappearOnMobile gap={2}>
							{navLinks.map((item) => (
								<LinkButton key={`${item.title}-${item.type}`} title={item.title} data={item.data} />
							))}
							<PopoverComponent data={dataArray} displayArrow />
						</DisappearOnMobile>
						<DisappearOnMobile gap={2}>
							<GetStartedButton />
						</DisappearOnMobile>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { lg: 'none' } }}
						>
							<Menu sx={{color: '#fff'}} />
						</IconButton>
					</StyledHeaderToolbar>
					<Box component='nav'>
						<Drawer
							container={window.document.body}
							variant='temporary'
							open={mobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true,
							}}
							sx={{
								display: { xs: 'block', lg: 'none' },
								'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
							}}
						>
							{drawer}
						</Drawer>
					</Box>
				</HeroSectionWrapper>
			</HeaderWrapper>
		</HeaderContent>
	);
};

LandingHeader.defaultProps = { transparent: false };
export default LandingHeader;
