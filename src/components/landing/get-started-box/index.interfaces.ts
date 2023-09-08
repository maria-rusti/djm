import { BoxProps } from '@mui/material';

type GetStartedBoxDecorationsType = 'dots' | 'pentagon'

interface GetStartedBoxDecorations {
    top: string | number
    left: string | number,
    type: GetStartedBoxDecorationsType
}

interface GetStartedBoxProps extends BoxProps {
    decorations: GetStartedBoxDecorations[],
    big?: boolean
};

export type { GetStartedBoxProps, GetStartedBoxDecorations, GetStartedBoxDecorationsType };
