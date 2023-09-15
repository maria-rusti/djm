import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GuestRoute, Loadable } from '../components/common';
// GUEST
const NotFound = Loadable(lazy(() => import('./common/not-found')));
const Landing = Loadable(lazy(() => import('./guest/landing')));
const Test = Loadable(lazy(() => import('./guest/test')));
const PrivacyPolicy = Loadable(lazy(() => import('./common/privacy-policy')));
const TermsOfService = Loadable(lazy(() => import('./common/terms-of-service')));
const Products = Loadable(lazy(() => import('./guest/products')));
const Prices = Loadable(lazy(() => import('./guest/prices')));
const Subscriptions = Loadable(lazy(() => import('./guest/subscriptions')));
const Discounts = Loadable(lazy(() => import('./guest/discounts')));
const Contact = Loadable(lazy(() => import('./guest/contact')));
const Partnership = Loadable(lazy(() => import('./guest/partnership')));
const Faq = Loadable(lazy(() => import('./common/faq')));
const Socials = Loadable(lazy(() => import('./guest/socials')));

const Views: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/test' element={<Test />}/>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<GuestRoute />}>
				<Route path='/' element={<Landing />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms-of-service' element={<TermsOfService />} />
				<Route path='/faq' element={<Faq />} />
				<Route path='/products' element={<Products />} />
				<Route path='/servicii/:page' element={<Products />} />
				<Route path='/prices' element={<Prices />} />
				<Route path='/socials/:platform' element={<Socials />} />
				<Route path='/subscriptions' element={<Subscriptions />} />
				<Route path='/discounts' element={<Discounts />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/partnership' element={<Partnership />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/partnership' element={<Partnership />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Views;
