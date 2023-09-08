import * as yup from 'yup';

export interface PartnershipInputs {
	telegramUsername: string;
	hasSocialMediaGroups?: boolean;
	groupMembers?: number;
	groupNiche?: string;
	groupLink?: string;
	message?: string;
}

const defaulValues: PartnershipInputs = {
	telegramUsername: '',
	hasSocialMediaGroups: false,
	groupMembers: 0,
	groupNiche: '',
	groupLink: '',
	message: '',
};

export interface Messages {
	telegramUsername: string;
	groupMembers: { required: string; type: string };
	groupNiche?: string;
	groupLink?: string;
	message?: string;
}

const validationSchema = (messages: Messages): yup.ObjectSchema<PartnershipInputs> =>
	yup
		.object({
			telegramUsername: yup.string().trim().required(messages.telegramUsername),
			hasSocialMediaGroups: yup.boolean(),
			groupMembers: yup
				.number()
				.typeError(messages.groupMembers?.type)
				.when('hasSocialMediaGroups', {
					is: true,
					then: (schema: yup.NumberSchema<number | undefined, yup.AnyObject, undefined, ''>) =>
						schema.required(messages.groupMembers.required),
					otherwise: (schema: yup.NumberSchema<number | undefined, yup.AnyObject, undefined, ''>) =>
						schema,
				})
				.min(1, messages.groupMembers?.type),
			groupNiche: yup
				.string()
				.trim()
				.when('hasSocialMediaGroups', {
					is: true,
					then: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) =>
						schema.required(messages.groupNiche),
					otherwise: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) =>
						schema,
				}),
			groupLink: yup
				.string()
				.trim()
				.when('hasSocialMediaGroups', {
					is: true,
					then: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) =>
						schema.required(messages.groupLink),
					otherwise: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) =>
						schema,
				}),
			message: yup
				.string()
				.trim()
				.when('hasSocialMediaGroups', {
					is: true,
					then: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) => schema,
					otherwise: (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>) =>
						schema.required(messages.message),
				}),
		})
		.required();

export { defaulValues, validationSchema };
