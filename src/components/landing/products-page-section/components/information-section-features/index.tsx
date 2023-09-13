import React, { FC } from 'react';
import FeatureItem, { IFeatureItem } from '../../../feature-item';
import { Flex } from '../../../../common';
import { uuid } from '../../../../../utils/functions';
import music from '../../../../../assets/video/music.mp3';
import music1 from '../../../../../assets/video/nunta1.mp3';
import music2 from '../../../../../assets/video/nunta2.mp3';
import music3 from '../../../../../assets/video/nunta3.mp3';

interface IProps {
	features: IFeatureItem[];
}

const InformationSectionFeatures: FC<IProps> = ({ features }): JSX.Element => {
	const musicPlay = [music, music1, music2, music3];
	return (
		<Flex flexWrap='wrap' width='100%' gap={2}>
			{features.map((feature, index) => (
				<FeatureItem key={uuid()} feature={feature} music={musicPlay[index]} />
			))}
		</Flex>
	);
};
export default InformationSectionFeatures;
