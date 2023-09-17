/* eslint-disable no-param-reassign */
import React, { useState, useCallback, useMemo, Fragment, FC } from 'react';
import { Box, Card, CardHeader, CardContent, IconButton, Typography, Collapse, styled, CardProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import Flex from '../wrapper/flex';

export const StyledCard: FC<CardProps> = styled(Card)(({ theme }) => ({
	maxWidth: theme.spacing(100),
	width: '100%',
	minWidth: theme.spacing(27),
	margin: theme.spacing(2, 0),
	cursor: 'pointer',
	border: `${theme.palette.primary.main} solid 1px`,
	'&:hover': {
		boxShadow: theme.shadows,
	},
}));

interface IProps {
	data: DataPropType;
}

export interface IData {
	title: string;
	length: number; // --> it refers to the
	data_arr: {
		length: number[];
		sub_title: string;
		content_arr: {
			key: string;
			length: number[][];
		}[];
	}[];
}

export type DataPropType = IData[];

const StaticContent: FC<IProps> = ({ data }) => {
	const { t: translate } = useTranslation();
	const { pathname } = useLocation();

	const [expanded, setExpanded] = useState<boolean[]>(Array(data.length).fill(false));

	const handleExpandClick = (index: number): void => {
		setExpanded((prevExpanded) => {
			const newExpanded = [...prevExpanded];
			newExpanded[index] = !newExpanded[index];
			return newExpanded;
		});
	};

	const isExpanded = (index: number): boolean => expanded[index];

	const baseTKey = useMemo(() => `${pathname.replaceAll('-', '_').replace('/', '')}.`, [pathname]);

	const t = useCallback(
		(key: string, index?: number, pres?: number[]) => {
			if (pres !== undefined) for (const pre of pres) key = key.replace('arr_item', `${pre + 1}`);
			key.includes('_arr_item') && index !== undefined && (key = key.replace('arr_item', `${index + 1}`));
			return translate(baseTKey.concat(key));
		},
		[translate, baseTKey]
	);
	const tItem = data[0] as IData;

	return (
		<Flex width='100%' justifyCenter column mb={5} px={3}>
			{Array.from(Array(data[0].length).keys()).map((item, index) => (
				<StyledCard key={`${data[0].title}-${item}`} onClick={(): void => handleExpandClick(index)}>
					<CardHeader
						title={t(data[0].title, index)}
						action={
							<IconButton aria-expanded={isExpanded(index)} aria-label='show more'>
								{isExpanded(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
							</IconButton>
						}
					/>
					<Collapse in={isExpanded(index)} timeout='auto' unmountOnExit>
						<CardContent>
							{Array.from(Array(tItem.data_arr[0].length[index]).keys()).map((n, indexDataArr) => (
								<Fragment key={`${tItem.data_arr[0].sub_title}-${n}`}>
									<Typography variant='h6' component='h3'>
										{t(tItem.data_arr[0].sub_title, indexDataArr, [index])}
									</Typography>
									{tItem.data_arr[0].content_arr && (
										<ul>
											{Array.from(
												Array(
													tItem.data_arr[0].content_arr[0].length[index][indexDataArr]
												).keys()
											).map((v, indexContentArr) => (
												<Box
													component='li'
													key={`${tItem.data_arr[0].content_arr[0].key}-${v}`}
												>
													{t(tItem.data_arr[0].content_arr[0].key, indexContentArr, [
														index,
														indexDataArr,
													])}
												</Box>
											))}
										</ul>
									)}
								</Fragment>
							))}
						</CardContent>
					</Collapse>
				</StyledCard>
			))}
		</Flex>
	);
};

export default StaticContent;
