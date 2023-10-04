import { Box } from '@mui/material';
import React, { useRef } from 'react';

const slideLeftKeyframes = `
  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100%));
    }
  }
`;

const slideRightKeyframes = `
  @keyframes slideRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export interface ISliderProps {
	direction: 'left' | 'right';
	duration: number;
	children: React.ReactNode;
}

const SliderList: React.FC<ISliderProps> = ({ direction, duration, children }) => {
	const sliderContentRef = useRef<HTMLDivElement>(null);

	const containerStyle: React.CSSProperties = {
		width: '100%',
		display: 'flex',
		overflowX: 'scroll', 
		WebkitOverflowScrolling: 'touch',
		position: 'relative',
		flexDirection: direction === 'left' ? 'row' : 'row-reverse',
	};

	const contentStyle: React.CSSProperties = {
		display: 'flex',
		flexWrap: 'nowrap',
		width: 'fit-content',
		animation: `${direction === 'left' ? 'slideLeft' : 'slideRight'} ${duration}s linear infinite`,
	};

	return (
		<Box sx={containerStyle}>
			<style>{slideLeftKeyframes}</style>
			<style>{slideRightKeyframes}</style>
			<Box ref={sliderContentRef} style={contentStyle}>
				<ul style={{ display: 'flex' }}>{children}</ul>
			</Box>
		</Box>
	);
};

export default SliderList;
