import { ComponentType, FC, Suspense } from 'react';
import Loading from '../loading';

function Loadable<P extends object>(Component: ComponentType<P>): FC<P> {
	return (props: P) => (
		<Suspense fallback={<Loading/>}>
			<Component {...props} />
		</Suspense>
	);
}

export default Loadable;
