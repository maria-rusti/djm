import * as yup from 'yup';

const schema = yup
	.object({
		email: yup
			.string()
			.required('Email must be entered!')
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be valid!'),
		name: yup.string().required('Name must be entered!'),
		phone: yup.string().required('Name must be entered!'),
		content: yup
			.string()
			.required('Please provide a message!')
			.min(3, 'Message must be at least 3 characters long!'),
	})
	.required();

export { schema };
