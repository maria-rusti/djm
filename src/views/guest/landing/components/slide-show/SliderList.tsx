// import { Box } from '@mui/material';
// import React, { useState, useEffect, useRef } from 'react';

// // Definim cheile CSS în afara componentei
// const slideLeftKeyframes = `
//   @keyframes slideLeft {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(calc(-100%));
//     }
//   }
// `;

// const slideRightKeyframes = `
//   @keyframes slideRight {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(100%);
//     }
//   }
// `;

// export interface ISliderProps {
// 	direction: 'left' | 'right';
// 	duration: number;
// 	children: React.ReactNode;
// }

// const SliderList: React.FC<ISliderProps> = ({ direction, duration, children }) => {
// 	const [isAnimating, setIsAnimating] = useState(true);
// 	const sliderContentRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		const sliderContent = sliderContentRef.current;
// 		const contentWidth = sliderContent?.scrollWidth || 0;
// 		const containerWidth = sliderContent?.clientWidth || 0;

// 		if (containerWidth >= contentWidth) {
// 			setIsAnimating(false);
// 		}
// 		setIsAnimating(true);
// 	}, []);

// 	const containerStyle: React.CSSProperties = {
// 		width: '100%',
// 		display: 'flex',
// 		overflowX: 'scroll', // Păstrăm "scroll" pentru a permite scrolling-ul manual
// 		WebkitOverflowScrolling: 'touch',
// 		position: 'relative',
// 		flexDirection: direction === 'left' ? 'row' : 'row-reverse',
// 	};

// 	const contentStyle: React.CSSProperties = {
// 		display: 'flex',
// 		flexWrap: 'nowrap',
// 		width: 'fit-content',
// 		animation: `${direction === 'left' ? 'slideLeft' : 'slideRight'} ${duration}s linear infinite`,
// 		animationPlayState: isAnimating ? 'running' : 'paused',
// 	};

// 	return (
// 		<Box sx={containerStyle}>
// 			<style>{slideLeftKeyframes}</style>
// 			<style>{slideRightKeyframes}</style>
// 			<Box ref={sliderContentRef} style={contentStyle}>
// 				{children}
// 			</Box>
// 		</Box>
// 	);
// };

// export default SliderList;
import { Box } from '@mui/material';
import React, { useRef } from 'react';

// Define the CSS keyframes outside the component
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
		overflowX: 'scroll', // Keep "scroll" to allow manual scrolling
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
