import { Box } from '@mui/material';
import { ISocialsComponent } from '../index.interfaces';
import { SocialsPageDescription, SocialsPageHeading, SocialsPageImage } from '../index.styled';

const handleComponentRender = ({ type, content }: ISocialsComponent): JSX.Element => {
	switch (type) {
		case 'heading': {
			return <SocialsPageHeading >{content}</SocialsPageHeading>;
		}
		case 'description': {
			return <SocialsPageDescription>{content}</SocialsPageDescription>;
		}
		case 'image': {
			return <SocialsPageImage src={content} alt='img not found' />;
		}
		default: {
			return <Box />;
		}
	}
};

export { handleComponentRender };