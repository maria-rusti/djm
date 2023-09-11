import React, { FC } from 'react';
import FeatureItem, { IFeatureItem } from '../../../feature-item';
import { Flex } from '../../../../common';
import { uuid } from '../../../../../utils/functions';

interface IProps {
	features: IFeatureItem[];
}

const InformationSectionFeatures: FC<IProps> = ({ features }): JSX.Element => (
	<Flex flexWrap='wrap' width='100%' gap={2}>
		{features.map((feature) => (
			<FeatureItem key={uuid()} {...feature} />
		))}
	</Flex>
);

export default InformationSectionFeatures;
