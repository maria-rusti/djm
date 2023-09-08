/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {NotFoundContent, NotFoundImage, NotFoundWrapper } from './index.styled';
import { ButtonSG } from '../../../components/common';
import LandingHeader from '../../../components/landing/header';
import { SectionTitleDistinctSG, SectionTitleTypho } from '../../../components/landing/section-title/index.styled';


const NotFound: FC = () => {

	const theme = useTheme();

	return (
		<NotFoundWrapper>
			<LandingHeader transparent />
			<NotFoundContent>
				<NotFoundImage src='https://storage.googleapis.com/sbdcloud/1691669776372-Lovepik_com-401698817-stick-figure-with-question-mark-on-face.png'/>
				<Box textAlign='center'>
					<SectionTitleTypho variant='h2'>
						<SectionTitleDistinctSG>
							Oops! 404 not found
						</SectionTitleDistinctSG>
					</SectionTitleTypho>
				</Box>
				<Box>
					<Typography textAlign='center' fontSize={theme.typography.h5.fontSize}>
						The page you are looking for doesn't exist or has been moved.
					</Typography>
					<Typography textAlign='center' fontSize={theme.typography.h5.fontSize}>
						Please go back to the homepage.
					</Typography>
				</Box>
				<NavLink to="/">
					<ButtonSG shadow variant='outlined' hover width={200}>
						Go to home page
					</ButtonSG>
				</NavLink>
			</NotFoundContent>
		</NotFoundWrapper>
	);
};

export default NotFound;
