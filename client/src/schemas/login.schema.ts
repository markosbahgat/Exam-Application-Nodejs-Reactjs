import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Please Enter a valid Email address').required(),
	password: Yup.string().min(8, 'Please Enter at lease 8 char').max(50).required(),
	name: Yup.string().required()
});
