import { Box } from '@mui/material';
import { ISocialsComponent } from './index.interfaces';
import {
	SocialsPageButton,
	SocialsPageDescription,
	SocialsPageSectionWrapper,
	SocialsPageTitle
} from './index.styled';
import { handleComponentRender } from './functions';
import { uuid } from '../../../utils/functions';

interface SocialsPageSectionProps {
	platform: string;
	data: ISocialsComponent[];
	clipPath?: boolean
}

const SocialsPageSection: React.FC<SocialsPageSectionProps> = ({ platform, data, clipPath }): JSX.Element => (
	<SocialsPageSectionWrapper clipPath={clipPath}>
		<SocialsPageTitle >{platform} x SocialGod Integration</SocialsPageTitle>
		{data.map((item) => (
			<Box key={uuid()} >
				{handleComponentRender(item)}
			</Box>
		))}
		<SocialsPageTitle>How to connect with {platform}?</SocialsPageTitle>
		<SocialsPageDescription >
			Sign up for SocialGod today and add your {platform} page and group right away. <br />
			You will get 7 days for free to try out our product.
		</SocialsPageDescription>
		<SocialsPageButton >
			Connect {platform}
		</SocialsPageButton>
	</SocialsPageSectionWrapper>
);

export default SocialsPageSection;