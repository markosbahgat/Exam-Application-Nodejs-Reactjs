import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { FormikProps } from 'formik';
import React from 'react';
import { classNames } from './index';

type Props = {
	formik: FormikProps<any>;
	label: string;
	name: string;
	type: string;
	id: string;
	required: boolean;
};

const Input: React.FC<Props> = ({ formik, name, label, type, id, required }) => {
	const { errors, touched, values, handleChange, handleBlur } = formik;
	return (
		<div className='w-full'>
			<label
				htmlFor={id}
				className={classNames(
					errors[name ?? 'default'] && touched[name ?? 'default']
						? 'text-red-500 block text-sm font-medium'
						: 'block text-sm font-medium text-gray-700'
				)}>
				{label}
			</label>
			<div className='mt-1 w-full relative rounded-md shadow-sm'>
				<input
					id={id}
					name={name}
					type={type}
					value={values[name]}
					onChange={handleChange}
					onBlur={handleBlur}
					autoComplete={name}
					required={required}
					className={classNames(
						errors[name] && touched[name]
							? 'block w-full pr-10 px-3 py-1.5 border-red-300 text-red-900 placeholder-red-300 focus:outline-none ring-red-500 focus:border-red-500 sm:text-sm rounded-md ring-2'
							: 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					)}
				/>
				{errors[name] && touched[name] && (
					<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
						<ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden='true' />
					</div>
				)}
			</div>
			{errors[name] && touched[name] && (
				<p className='mt-2 text-sm text-red-600' id={id}>
					{errors[name]?.toString()}
				</p>
			)}
		</div>
	);
};

export default Input;
