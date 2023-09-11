import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import LandingHeader from '../../../landing/header';
import Footer from '../../footer';

const GuestRoute: FC = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<LandingHeader transparent />
			<Outlet />
			<Footer />
		</>
	);
};

export default GuestRoute;
