import React, { FC } from 'react';
import FeatureItem, { IFeatureItem } from '../../../feature-item';
import { Flex } from '../../../../common';
import { uuid } from '../../../../../utils/functions';
import music from '../../../../../assets/video/music.mp3';
import music1 from '../../../../../assets/video/nunta1.mp3';
import music2 from '../../../../../assets/video/nunta2.mp3';
import music3 from '../../../../../assets/video/nunta3.mp3';
// import nunta from '../../../../../assets/video/nunta.mp4';
// import nunta2 from '../../../../../assets/video/nunta2.mp4';
// import nunta3 from '../../../../../assets/video/nunta3.mp4';
// import nunta4 from '../../../../../assets/video/nunta4.mp4';

interface IProps {
	features: IFeatureItem[];
	video: string;
}

const InformationSectionFeatures: FC<IProps> = ({ features, video }): JSX.Element => {
	const musicPlay = [music, music1, music2, music3];
	// const video = [nunta, nunta2, nunta3, nunta4];
	return (
		<Flex flexWrap='wrap' width='100%' gap={2}>
			{features.map((feature, index) => (
				<FeatureItem
					key={uuid()}
					feature={feature}
					music={video === '' ? musicPlay[index] : ''}
					service={video}
				/>
			))}
		</Flex>
	);
};
export default InformationSectionFeatures;
