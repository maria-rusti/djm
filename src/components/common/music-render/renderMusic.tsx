import React from 'react';

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) =>  (
	<div>
		<audio controls autoPlay>
			<source src={src} type="audio/mpeg" />
			<track src="captions.vtt" kind="captions" srcLang="en" label="English Captions" />
			Acest browser nu suportă redarea audio.
		</audio>
	</div>
);

export default MusicPlayer;
