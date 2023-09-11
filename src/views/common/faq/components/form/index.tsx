import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IFormFaqProps } from './index.interfaces';
import { IValuesProps } from '../../index.interfaces';
import { FaqFormStyled } from './index.styled';
import { InputSearch, InputSelectPlatform } from '../../index.styled';
import { ComponentEnd } from './components/buttonSearch';

const FormFaq: FC<IFormFaqProps> = ({
	mobileWidth,
	service,
	handleSelectService,
	services,
	handleFetchDate,
	open,
	setOpen,
}): JSX.Element => {
	const { handleSubmit, register, reset } = useForm<IValuesProps>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const handleClose = (): void => {
		setOpen(false);
	};

	const handleSearch = (search: string): void => {
		if (search.length > 3) {
			if (service === '') {
				handleFetchDate(undefined, search);
			} else {
				handleFetchDate(service === 'All' ? '' : service, search);
			}
			reset();
		}
	};
	useEffect(() => {
		if (open) {
			document.addEventListener('scroll', handleClose);
		} else {
			document.removeEventListener('scroll', handleClose);
		}

		return () => {
			document.removeEventListener('scroll', handleClose);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);
	return (
		<FaqFormStyled onSubmit={handleSubmit((formData) => handleSearch(formData.search))}>
			<FormControl sx={{ width: '50%' }} variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-password'>Search</InputLabel>
				<InputSearch
					mobileWidth={mobileWidth}
					onKeyDown={(e): void => {
						if (e.key === 'Enter') {
							handleSubmit((formData) => handleSearch(formData.search))();
						}
					}}
					id='outlined-adornment-password'
					type='text'
					endAdornment={<ComponentEnd />}
					{...register('search')}
					label='Search'
				/>
			</FormControl>
			{!mobileWidth && (
				<FormControl sx={{ width: '50%' }}>
					<InputLabel id='demo-simple-select-label'>Platform</InputLabel>
					<InputSelectPlatform
						labelId='demo-simple-select-label'
						value={service}
						onChange={(e): void => handleSelectService(e.target.value as unknown as string)}
						label='Platform'
						onOpen={(): void => setOpen(true)}
						onClose={handleClose}
						open={open}
					>
						{services
							.concat([
								{
									platform: 'All',
									_id: '',
									icon: {
										name: 'fluent-mdl2:all-apps',
										source: 'Iconify',
									},
									products: [],
									path: '',
								},
							])
							.reverse()
							.map((item) => (
								<MenuItem key={item.platform} value={item.platform}>
									{item.platform}
								</MenuItem>
							))}
					</InputSelectPlatform>
				</FormControl>
			)}
		</FaqFormStyled>
	);
};
export default FormFaq;
