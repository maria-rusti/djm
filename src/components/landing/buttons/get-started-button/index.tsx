import { useState } from 'react';
import { StyledGetStartedButton, StyledGetStartedButtonArrow } from './index.styled';
import { GetStartedButtonProps } from './index.interface';

const GetStartedButton: React.FC<GetStartedButtonProps> = (props: GetStartedButtonProps): JSX.Element => {

	const { white } = props;
	const [hover, setHover] = useState<boolean>();

	return (
		<StyledGetStartedButton white={white}
			onMouseOver={(): void => setHover(true)}
			onMouseLeave={(): void => setHover(false)}
		>
			<a style={{ color: 'inherit', textDecoration: 'none' }} href='https://app.socialgod.shop'>Get Started</a>
			< StyledGetStartedButtonArrow hover={!!hover} icon='maki:arrow' />
		</StyledGetStartedButton >
	);
};

GetStartedButton.defaultProps = {
	white: false
};

export default GetStartedButton;