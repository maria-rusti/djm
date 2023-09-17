/* eslint-disable react/jsx-no-useless-fragment */
import { Fragment, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';
import { CardContent, CardHeader, Collapse, IconButton, Typography } from '@mui/material';
import { IFaq } from '../../../../hooks/fetch-hooks/use-faq/index.interfaces';
import { StyledCard } from '../../../../components/common/static-content';

const RenderCardFaq = ({ faq, index }: { faq: IFaq; index: number }): JSX.Element => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const { t } = useTranslation();

	return (
		<StyledCard key={`${faq.question}`} onClick={(): void => setExpanded((prevValue) => !prevValue)}>
			<CardHeader
				title={t(faq.question)}
				action={
					<IconButton aria-expanded={expanded} aria-label='show more'>
						{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</IconButton>
				}
			/>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Fragment key={`${faq.answer}`}>
						<Typography variant='h6' component='h3'>
							{index}
						</Typography>
					</Fragment>
				</CardContent>
			</Collapse>
		</StyledCard>
	);
};
const MapRenderFaq = ({ dataArr }: { dataArr: IFaq[] }): JSX.Element => (
	<>
		{dataArr?.map((faq: IFaq, index: number) => (
			<RenderCardFaq key={`${faq.question}-${faq.answer}`} faq={faq} index={index} />
		))}
	</>
);

export default MapRenderFaq;
