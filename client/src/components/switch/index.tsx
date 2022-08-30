import { Switch } from '@headlessui/react';

import { classNames } from 'shared';
import { useAppDispatch, useAppSelector } from 'store';
import { changeMode, dataState } from 'slices';

type Props = {};

const Switcher = (props: Props) => {
	const { darkMode } = useAppSelector(dataState);
	const dispatch = useAppDispatch();
	const handleChange = () => {
		dispatch(changeMode());
	};
	return (
		<div
			className={classNames(
				darkMode ? 'text-white' : '',
				'flex flex-row items-center justify-center mr-5 gap-2'
			)}>
			Light{' '}
			<Switch
				checked={darkMode}
				onChange={handleChange}
				className='group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
				<span className='sr-only'>Use setting</span>
				<span aria-hidden='true' className='pointer-events-none absolute h-full w-full rounded-md bg-white' />
				<span
					aria-hidden='true'
					className={classNames(
						darkMode ? 'bg-indigo-600' : 'bg-gray-200',
						'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
					)}
				/>
				<span
					aria-hidden='true'
					className={classNames(
						darkMode ? 'translate-x-5' : 'translate-x-0',
						'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
					)}
				/>
			</Switch>{' '}
			Dark
		</div>
	);
};

export default Switcher;
