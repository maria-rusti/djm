import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { NavText } from '../NavButton';

interface IProps {
	title: string;
	data: string;
}

const LinkButton: FC<IProps> = ({ title, data }): JSX.Element => {
	const navigate = useNavigate();
	return <NavText onClick={(): void => navigate(data)}>{title}</NavText>;
};

export default LinkButton;
