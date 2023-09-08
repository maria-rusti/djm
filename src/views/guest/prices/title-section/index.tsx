import { Typography } from '@mui/material';
import { TitleSectionWrapper } from './index.styled';

const TitleSection: React.FC = (): JSX.Element => (
	<TitleSectionWrapper>
		<Typography variant='h3' fontWeight='bold'>Pricing</Typography>
		<Typography variant='h6' color='grey'>We have you covered, whether you&apos;re an individual
			content creator, a brand, business or an agency.</Typography>
	</TitleSectionWrapper>
);

export default TitleSection;