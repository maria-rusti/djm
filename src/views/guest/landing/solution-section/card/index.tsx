import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISolutionCard } from '..';
import { Flex } from '../../../../../components/common';
import { HeadingText, HoverIcon, IconBackground, SolutionCardSubtitle, StyledSolutionCard } from './index.styled';

const SolutionCard: React.FC<ISolutionCard> = ({ title, description, icon }): JSX.Element => {

	const navigate = useNavigate();
	const [hover, setHover] = useState<boolean>(false);

	return (
		<StyledSolutionCard hover
			onClick={(): void => navigate(`/products/${title.toLowerCase().replace(/ /g, '-')}`)}>
			<Flex gap={1} onMouseOver={(): void => setHover(true)}
				onMouseLeave={(): void => setHover(false)} width='100%' height='100%'>
				<IconBackground hover={hover}>
					<HoverIcon icon={icon} hover={hover} />
				</IconBackground>
				<Flex gap={2}>
					<HeadingText hover={hover}>{title}</HeadingText>
					<SolutionCardSubtitle>{description}</SolutionCardSubtitle>
				</Flex>
			</Flex>
		</StyledSolutionCard>
	);
};

export default SolutionCard;
