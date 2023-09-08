
import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import Flex from '../wrapper/flex';
import { LogoBoxAnimation } from '../../landing/header/components/LogoBoxAnimation';
import { LOGO } from '../../landing/header';

const Loading: React.FC = (): JSX.Element => (
	<Flex justifyCenter sx={{height: '100vh'}} alignItems='center'>
		<CircularProgress sx={{m: 2}}/>
		<LogoBoxAnimation>
			<Box component='img' sx={{ width: '150px', height: 'auto' }} src={LOGO} />
		</LogoBoxAnimation>
	</Flex>
);

export default Loading;