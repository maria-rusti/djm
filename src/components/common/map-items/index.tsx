import { FC } from 'react';
import { MapItemsProps } from './index.interfaces';
import { ifIsArray } from '../../../utils/functions';

const MapItems: FC<MapItemsProps<Record<string, any>>> = ({ items, renderItems }) => (
	<>{[...ifIsArray<typeof items>(items)].map(renderItems)}</>
);

export default MapItems;
