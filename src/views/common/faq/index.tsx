import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CircularProgress } from '@mui/material';
import { FaqWrapper } from './index.styled';
import { Flex } from '../../../components/common';
import useServices from '../../../hooks/fetch-hooks/use-services';
import { IServiceResponse } from '../../../hooks/fetch-hooks/use-services/index.interfaces';
import HeroSection from '../../../components/common/hero-section';
import { IFaq } from '../../../hooks/fetch-hooks/use-faq/index.interfaces';
import useFaq from '../../../hooks/fetch-hooks/use-faq';
import Logo from '../../../components/common/logo';
import MapRenderFaq from './components/renderFaq';
import MapRenderServices from './components/renderService';
import noContentArray from './data/index.json';
import { useWindowSize } from '../../../hooks/use-window-size';
import FormFaq from './components/form';

const Faq: FC = (): JSX.Element => {
	const { t } = useTranslation();
	const { width } = useWindowSize();
	const { data, getFaq, loadingFaq } = useFaq<IFaq[]>(undefined, true);
	const { data: services } = useServices<IServiceResponse[]>(undefined, true);
	const mobileWidth = width > 500;
	const [service, setService] = useState<string>('All');
	const [open, setOpen] = useState(false);

	const handleSelectService = (value: string): void => {
		setService(value);
		if (value !== '') {
			getFaq(value === 'All' ? '' : value);
		} else {
			getFaq();
		}
		setOpen(false);
	};

	const renderFaq = useCallback(
		() => (data.length > 0 ? <MapRenderFaq dataArr={data} /> : <MapRenderFaq dataArr={noContentArray as IFaq[]} />),
		[data]
	);

	const renderServices = useCallback(
		() => <MapRenderServices dataArr={services} serviceSelected={service} onSelect={handleSelectService} />,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[services, service]
	);

	return (
		<FaqWrapper>
			<HeroSection
				title={t('Frequently Asked Questions')}
				description="In this section, you'll find the most common inquiries."
			/>
			<Flex justifyCenter column width='100%' padding='5%'>
				{loadingFaq ? (
					<Flex justifyCenter sx={{ overflow: 'hidden' }}>
						<CircularProgress sx={{ marginRight: '30px', display: 'flex', alignSelf: 'center' }} />
						<Logo width='30%' />
					</Flex>
				) : (
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
						{mobileWidth && (
							<Flex column sx={{ marginRight: '2%' }}>
								{renderServices()}
							</Flex>
						)}
						<Flex justifyCenter column sx={{ marginRight: '5%', width: mobileWidth ? '70%' : '100%' }}>
							<FormFaq
								handleFetchDate={getFaq}
								mobileWidth={mobileWidth}
								service={service}
								handleSelectService={handleSelectService}
								services={services}
								open={open}
								setOpen={setOpen}
							/>
							{renderFaq()}
						</Flex>
					</Box>
				)}
			</Flex>
		</FaqWrapper>
	);
};

export default Faq;
