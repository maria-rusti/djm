import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GuestRoute, Loadable } from '../components/common';

const NotFound = Loadable(lazy(() => import('./common/not-found')));
const Landing = Loadable(lazy(() => import('./guest/landing')));
const PrivacyPolicy = Loadable(lazy(() => import('./common/privacy-policy')));
const TermsOfService = Loadable(lazy(() => import('./common/terms-of-service')));
const Products = Loadable(lazy(() => import('./guest/products')));
const Contact = Loadable(lazy(() => import('./guest/contact')));
const Partnership = Loadable(lazy(() => import('./guest/partnership')));

const Views: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<GuestRoute />}>
				<Route path='/' element={<Landing />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms-of-service' element={<TermsOfService />} />
				<Route path='/products' element={<Products />} />
				<Route path='/servicii/:page' element={<Products />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/partnership' element={<Partnership />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Views;
