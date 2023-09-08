import * as yup from 'yup';

const schema = yup
	.object({
		email: yup
			.string()
			.required('Email must be entered!')
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be valid!'),
	})
	.required();

export { schema };