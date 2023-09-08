type Ctx = CanvasRenderingContext2D | null | undefined;

interface ICircle {
    id: number,
    x: number,
    y: number,
    radius: number,
    start: number,
    percent: number,
    defaultPercent: number,
    dotX: number,
    dotY: number,
    speed: number,
};

interface IDrawLine {
    x: number,
    y: number,
}

export type { Ctx, ICircle, IDrawLine };