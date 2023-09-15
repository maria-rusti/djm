import { useState } from 'react';
import { useNavigate } from 'react-router';
import { StyledGetStartedButton, StyledGetStartedButtonArrow } from './index.styled';
import { GetStartedButtonProps } from './index.interface';

const GetStartedButton: React.FC<GetStartedButtonProps> = (props: GetStartedButtonProps): JSX.Element => {
	const { white } = props;
	const [hover, setHover] = useState<boolean>();
	const navigate = useNavigate();

	return (
		<StyledGetStartedButton
			white={white}
			onMouseOver={(): void => setHover(true)}
			onMouseLeave={(): void => setHover(false)}
			onClick={(): void => navigate('/contact')}
		>
			Contact
			<StyledGetStartedButtonArrow hover={!!hover} icon='maki:arrow' />
		</StyledGetStartedButton>
	);
};

GetStartedButton.defaultProps = {
	white: false,
};

export default GetStartedButton;
