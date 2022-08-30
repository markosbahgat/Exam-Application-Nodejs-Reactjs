import React from 'react';
import SignInForm from 'components/signInForm';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { logo } from 'assets/index';
import { classNames } from 'shared';
import { useAppSelector } from 'store';
import { dataState } from 'slices';
import { LoginSchema } from 'schemas/login.schema';

interface Props {}
interface FormValues {
	email: string;
	password: string;
	name: string;
}
const initialValues: FormValues = {
	email: '',
	password: '',
	name: ''
};
const SignInHoc: React.FC<Props> = () => {
	const { darkMode } = useAppSelector(dataState);
	const [isLoading, setLoading] = useState<boolean>(false);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues,
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			setLoading(true);
			formik.resetForm();
			localStorage.setItem('user', JSON.stringify(values));
			setTimeout(() => {
				navigate('/exams');
				setLoading(false);
			}, 3000);
		}
	});

	if (isLoading) {
		return (
			<>
				<div className='min-h-screen pt-16 pb-12 flex flex-col items-center bg-white'>
					<main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex-shrink-0 flex justify-center'>
							<a href='/' className='inline-flex'>
								<img className='h-12 w-auto' src='/nagwa.png' alt='' />
							</a>
						</div>
						<div className='py-16'>
							<div className='text-center'>
								<p className='text-sm font-semibold text-[#026bb0] uppercase tracking-wide'>
									Loading....
								</p>
								<h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
									Be patient we are coming.!
								</h1>
							</div>
						</div>
					</main>
				</div>
			</>
		);
	}

	return (
		<>
			<div className={classNames(darkMode ? 'bg-gray-900' : 'bg-gray-100', 'h-[90vh]')}>
				<div className='flex self-center min-h-full items-center justify-center'>
					<div className='w-[750px] flex flex-1 flex-col justify-center py-0 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
						<div className='flex flex-col w-full lg:w-[100%] p-10 rounded-3xl shadow-lg bg-white  min-h-fit '>
							<div>
								<Link to='/'>
									<img
										className='h-28 w-auto m-auto object-contain xl:mb-10'
										src={logo}
										alt='Nagwa'
									/>
								</Link>
								<h2 className='mt-6 text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
								<p className='mt-2 text-sm text-gray-600'>
									New User ?{' '}
									<Link to='/login' className='font-medium text-blue-600 hover:text-black'>
										Create New Account
									</Link>
								</p>
							</div>

							<div className='mt-8'>
								<div className='mt-6'>
									<SignInForm formik={formik} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignInHoc;
