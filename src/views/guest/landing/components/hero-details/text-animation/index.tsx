/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useState, useCallback } from 'react';
import animationStyles from './animationStyles';
import type { AnimateObject, Animations } from './animationStyles';

type TextraProps = {
	data: string[];
	effect?: Animations;
	duration?: number;
	stopduration?: string;
	className?: string;
	onUpdate?: (index: number) => void
};

const Textra = (props: TextraProps): JSX.Element => {
	const selectedAnimation = props.effect || 'simple';
	const animationRef = useRef<number | null>(null);
	const [style, setStyle] = useState<AnimateObject>(
		animationStyles[selectedAnimation][0]
	);
	const textArrIndex = useRef(0);
	const previousTime = useRef<number | null>(null);
	const animationDuration = props.duration || 500;
	const stopDuration = props.stopduration || 3000;
	const currentRoundStartTime = useRef(0);
	const singleRoundDuration = Number(stopDuration) + 2 * animationDuration;
	const easeOutQuad = (t: number): number => t * (2 - t);
	const text = props.data[textArrIndex.current];

	useEffect(() => {
		setStyle(animationStyles[selectedAnimation][0]);
	}, [selectedAnimation]);

	const runShowTextAnimation = (elapsed: number) => {
		const showingTranlateInitial =
			animationStyles[selectedAnimation][1].translate.value;
		const showingTranlateDiffrence =
			animationStyles[selectedAnimation][1].translate.value -
			animationStyles[selectedAnimation][0].translate.value;
		const showingTiming = easeOutQuad(
			(elapsed - currentRoundStartTime.current) / animationDuration
		);
		setStyle((s: { translate: any; }) => ({
			translate: {
				...s.translate,
				value: showingTranlateInitial - showingTranlateDiffrence * showingTiming
			},
			opacity: showingTiming
		}));
	};

	const runHideTextAnimation = (elapsed: number) => {
		const hidingTraslateInitial =
			animationStyles[selectedAnimation][0].translate.value;
		const hidingTranslateDiffrence =
			animationStyles[selectedAnimation][0].translate.value -
			animationStyles[selectedAnimation][1].translate.value;
		const hidingOpacityInitial = animationStyles[selectedAnimation][0].opacity;
		const hidingTiming = easeOutQuad(
			(elapsed - (currentRoundStartTime.current + singleRoundDuration - animationDuration)) /
			animationDuration
		);
		setStyle((s: { translate: any; }) => ({
			translate: {
				...s.translate,
				value: hidingTraslateInitial - hidingTranslateDiffrence * hidingTiming
			},
			opacity: hidingOpacityInitial - hidingTiming
		}));
	};

	const updateTextIndex = () => {
		if (textArrIndex.current === props.data.length - 1) {
			textArrIndex.current = 0;
		} else {
			textArrIndex.current += 1;
		}
	};
	const updateRoudStartTime = () => { currentRoundStartTime.current += singleRoundDuration; };
	const handlePropEvents = () => { props.onUpdate && props.onUpdate(textArrIndex.current); };

	const runAnimation = useCallback(
		(timestamps: number | null) => {
			if (previousTime.current === null) previousTime.current = timestamps;
			const elapsed = timestamps && timestamps - (previousTime.current as number);

			if (elapsed &&
				elapsed > currentRoundStartTime.current &&
				elapsed < currentRoundStartTime.current + animationDuration
			) {
				runShowTextAnimation(elapsed);
			}

			if (elapsed &&
				elapsed > currentRoundStartTime.current + singleRoundDuration - animationDuration &&
				elapsed < currentRoundStartTime.current + singleRoundDuration
			) {
				runHideTextAnimation(elapsed);
			}

			if (elapsed && elapsed > currentRoundStartTime.current + singleRoundDuration) {
				updateRoudStartTime();
				updateTextIndex();
				handlePropEvents();
			}

			animationRef.current = window.requestAnimationFrame(runAnimation);
		},
		[selectedAnimation, props.data.length, singleRoundDuration, animationDuration]
	);

	useEffect(() => {
		animationRef.current = window.requestAnimationFrame(runAnimation);

		return () => window.cancelAnimationFrame(animationRef.current as number);
	}, [runAnimation, props.effect]);

	return (
		<span
			style={{
				display: 'inline-block',
				transform: `${style.translate.type}(${style.translate.value}${style.translate.unit})`,
				opacity: style.opacity
			}}
			{...props}
		>
			{text}
		</span>
	);
};

export default Textra;