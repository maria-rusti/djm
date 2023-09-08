import React from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import {
	Checkbox,
	FormControlLabel,
	CircularProgress,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { FormWrapper, GroupInputsWrapper } from '../index.styled';
import { Flex } from '../../../../components/common';
import { Messages, PartnershipInputs, defaulValues, validationSchema } from './index.validators';
import { FormInputSG } from '../../../../components/common/input';
import { capitalize } from '../../../../utils/functions';
import usePartnership, { IPartnership } from '../../../../hooks/fetch-hooks/use-partnership';
import { NewsletterButton } from '../../landing/newsletter-section/newsletter-form/index.styled';

const PartnershipForm: React.FC = () => {
	const { t } = useTranslation();
	const { postPartnership, loading } = usePartnership();
	const requiredMessages: Messages = {
		telegramUsername: capitalize(t('partnership_page.telegram_username.error')),
		groupMembers: {
			required: capitalize(t('partnership_page.group_members.error')),
			type: capitalize(t('partnership_page.group_members.type_error')),
		},
		groupNiche: capitalize(t('partnership_page.group_niche.error')),
		groupLink: capitalize(t('partnership_page.group_link.error')),
		message: capitalize(t('partnership_page.message.error')),
	};
	const {
		control,
		handleSubmit: handleSubmitForm,
		formState: { isValidating },
		register,
		watch,
		reset,
	} = useForm<PartnershipInputs>({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: defaulValues,
		resolver: yupResolver(
			validationSchema(requiredMessages)
		) as unknown as Resolver<PartnershipInputs>,
	});

	const handleSubmit = (data: IPartnership): void => {
		if (!data.hasSocialMediaGroups) {
			const newData = {
				...data,
				groupMembers: undefined,
				groupLink: undefined,
				groupNiche: undefined,
			};
			postPartnership(newData);
		} else {
			const newData = {
				...data,
				groupMembers: data.groupMembers && +data.groupMembers,
			};
			postPartnership(newData);
		}
		reset();
	};
	const theme = useTheme();
	const hasSocialMediaGroups = watch('hasSocialMediaGroups');
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const handleDisabled = (): boolean => {
		const {telegramUsername, 
			groupNiche, groupMembers, groupLink, message} = control._formValues;
		if(!hasSocialMediaGroups && !isValidating) {
			return !!(telegramUsername && message);
		} 
		return !!(telegramUsername && message && groupNiche && groupMembers && groupLink);
		
	};

	return (
		<FormWrapper
			component='form'
			onSubmit={handleSubmitForm(handleSubmit)}
			width={!isMobile ? theme.spacing(100) : theme.spacing(38)}
			height='auto'
		>
			<Flex justifyCenter gap={theme.spacing(1)} column marginBottom={theme.spacing(2)}>
				<FormInputSG
					name='telegramUsername'
					label={capitalize(t('partnership_page.telegram_username.label'))}
					control={control}
				/>
				<FormInputSG
					name='message'
					label={capitalize(t('partnership_page.message.label'))}
					control={control}
				/>
			</Flex>

			<Flex column gap={theme.spacing(0.5)}>
				<FormControlLabel
					control={<Checkbox {...register('hasSocialMediaGroups')} checked={hasSocialMediaGroups} />}
					label={capitalize(t('partnership_page.has_socials.label'))}
				/>

				<GroupInputsWrapper hasSocialMediaGroup={hasSocialMediaGroups}>
					{hasSocialMediaGroups ? (
						<>
							<FormInputSG
								name='groupMembers'
								label={capitalize(t('partnership_page.group_members.label'))}
								control={control}
								muiInputProps={{ inputProps: { min: 0 } }}
								type='number'
							/>
							<FormInputSG
								name='groupNiche'
								label={capitalize(t('partnership_page.group_niche.label'))}
								control={control}
							/>
							<FormInputSG
								name='groupLink'
								label={capitalize(t('partnership_page.group_link.label'))}
								control={control}
							/>
						</>
					) : null}
				</GroupInputsWrapper>
				<NewsletterButton type='submit' disabled={!handleDisabled()} variant='outlined'>
					{loading ? (
						<CircularProgress size={theme.spacing(3)} />
					) : (
						<>
							Submit
							<Icon icon='material-symbols:double-arrow' width={30} />
						</>
					)}
				</NewsletterButton>
			</Flex>
		</FormWrapper>
	);
};

export default PartnershipForm;
