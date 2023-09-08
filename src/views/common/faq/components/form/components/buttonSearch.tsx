import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const ComponentEnd: React.FC = (): JSX.Element => (
	<IconButton aria-label='toggle password visibility' edge='end' type='submit'>
		<SearchIcon />
	</IconButton>
);
