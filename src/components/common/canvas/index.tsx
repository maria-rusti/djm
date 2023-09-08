import { useCallback, useEffect, useRef, useState } from 'react';
import circleData from './data/circle-data.json';
import { StyledCanvas } from './index.styled';
import { useIntersection } from '../../../hooks/use-intersection';
import { Ctx, ICircle, IDrawLine } from './index.interfaces';
import { handleImageCoords } from './functions';

const socials: string[] = ['https://storage.googleapis.com/sbdcloud/1692612945657-reddit-4(1).svg',
	'https://storage.googleapis.com/sbdcloud/1692613138693-facebook-3-2(1).svg',
	'https://storage.googleapis.com/sbdcloud/1692613432376-google-g-2015(1).svg',
	'https://storage.googleapis.com/sbdcloud/1692626466777-youtube-icon(1).svg',
	'https://storage.googleapis.com/sbdcloud/1692613509207-instagram-2016-5(1).svg',
	'https://storage.googleapis.com/sbdcloud/1692619414255-1688732252635-socialgod-logo(1)(1).png'];

const currentPercents = [-20, 22, 0, 33, 53];

let drawLine: IDrawLine | null = null;

let progress = 0;

const Canvas: React.FC = (props): JSX.Element => {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [inScreen, setInScreen] = useState<boolean>(true);

	const handleIntersection = useCallback(() => setInScreen(prev => !prev), []);

	const isMobile = window.innerWidth < 942;

	useIntersection(canvasRef, handleIntersection, []);

	// const cw = 942;
	// const ch = 612;
	const rw = 494;
	const rh = 225;

	useEffect(() => {

		const { PI } = Math;

		const drawImage = (ctx: Ctx, coords: number[], id?: number, background?: boolean): void => {
			if (ctx) {
				const img = new Image();
				const src = socials[id as number];
				img.src = background ? 'https://storage.googleapis.com/sbdcloud/1692352535430-mapa.svg' : src;
				ctx.drawImage(img, coords[0], coords[1]);
			}
		};

		const drawArc = (ctx: Ctx, { x, y, radius, start, percent, id,
			defaultPercent, dotX, dotY, speed }: ICircle): void => {
			if (ctx && inScreen) {
				const handleDrawArc = (): void => {
					ctx.beginPath();
					ctx.arc(x, y, radius, start * (PI / 180),
						(360 * currentPercents[id] / 100 - 90) * (PI / 180));
					ctx.stroke();
				};
				if (currentPercents[id] < percent) {
					currentPercents[id] += percent / speed;
					handleDrawArc();
				} else {
					drawImage(ctx, [x + dotX, y + dotY], id);
					handleDrawArc();
					setTimeout((): void => {
						currentPercents[id] = defaultPercent;
					}, 2000);
				};
			};
		};

		const canvas = canvasRef.current;

		const handleClick = (e: MouseEvent): void => {
			if (canvas) {
				canvas.removeEventListener('click', handleClick);
				const rect = canvas?.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				drawLine = { x, y };
			}
		};

		const drawLineToMouse = (ctx: Ctx): void => {
			if (ctx && drawLine) {
				const handleDrawLine = (ascending: boolean): void => {
					if (drawLine) {

						const { x, y } = drawLine;
						progress += ascending ? 0.05 : 0;

						const currentX = rw + (x - rw) * progress;
						const currentY = rh + (y - rh) * progress;
						ctx.beginPath();

						ctx.moveTo(rw, rh + 10);
						ctx.lineTo(currentX, currentY);

						ctx.stroke();
						ctx.strokeStyle = '#000';
					}
				};
				if (progress < 1) {
					handleDrawLine(true);
				} else {
					const imageCoords = handleImageCoords(rw, rh, drawLine);
					drawImage(ctx, imageCoords, Math.floor(imageCoords[0] % 5));
					handleDrawLine(false);
					setTimeout(() => {
						progress = 0;
						!isMobile && canvas?.addEventListener('click', handleClick);
						drawLine = null;
					}, 1000);
				}
			}
		};

		const context = canvas?.getContext('2d');

		// let frameCount = 0;
		let animationFrameId: number;

		if (canvas && !isMobile) {
			canvas.addEventListener('click', handleClick);
		}

		const render = (): void => {
			// frameCount++;
			if (inScreen && canvas) {
				drawImage(context, [0, 0], 0, true);
				drawImage(context, [rw, rh], 5);
				drawLineToMouse(context);
				for (const circle of circleData) {
					drawArc(context, { ...circle });
				};
				animationFrameId = window.requestAnimationFrame(render);
			};
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <StyledCanvas ref={canvasRef} {...props} width='942px' height='612px' />;
};

export default Canvas;