import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useBackToTop from '../../../hooks/use-back-to-top';
import { BackToTopIconButton } from './index.styled';

const BackToTop: React.FC = () => {
	const { showButton, scrollToTop } = useBackToTop();

	return (
		<BackToTopIconButton aria-label='scroll-to-top' onClick={scrollToTop} showButton={showButton} >
			<ArrowDropUpIcon  sx={{fontSize: '3rem'}} />
		</BackToTopIconButton>
	);
};

export default BackToTop;
