import React from 'react';
import { FormikProps } from 'formik';

import './style.scss';
import { IUser } from 'models';
import { Input } from 'shared';

interface Props {
	formik: FormikProps<IUser>;
}

const SignInForm: React.FC<Props> = ({ formik }) => {
	return (
		<form onSubmit={formik.handleSubmit} className='space-y-6' noValidate>
			<Input label='Name' name='name' formik={formik} id='name' required type='text' />
			<Input label='Email Address' name='email' formik={formik} id='email' required type='email' />
			<Input label='Password' name='password' id='password' required type='password' formik={formik} />

			<div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md border border-transparent bg-[#026bb0] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'>
					Sign in
				</button>
			</div>
		</form>
	);
};

export default SignInForm;
