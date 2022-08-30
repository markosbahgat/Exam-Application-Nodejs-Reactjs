import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { classNames, handleSignOut } from 'shared';
import { navigation, userNavigation } from 'constant';
import Switcher from 'components/switch';
import { useAppSelector } from 'store';
import { dataState } from 'slices';

type Props = {};

const Navbar = (props: Props) => {
	const { darkMode } = useAppSelector(dataState);
	return (
		<Popover className={classNames(darkMode ? 'bg-gray-900' : 'bg-white', 'relative  border-b-2')}>
			<div className='w-full mx-auto px-4 sm:px-10'>
				<div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
					<div className='flex justify-start lg:w-0 lg:flex-1'>
						<Link to='/' className='flex flex-row items-center justify-center gap-2'>
							<img className='h-8 w-auto sm:h-10' src='/nagwa.png' alt='' />
							<span
								className={classNames(
									darkMode ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'
								)}>
								Nagwa
							</span>
						</Link>
					</div>
					<div className='-mr-2 -my-2 md:hidden'>
						<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
							<span className='sr-only'>Open menu</span>
							<Bars3Icon className='h-6 w-6' aria-hidden='true' />
						</Popover.Button>
					</div>
					<Popover.Group as='nav' className='hidden md:flex space-x-10'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={classNames(
									darkMode ? 'text-white' : 'text-gray-700',
									'block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-900 hover:bg-gray-50'
								)}>
								{item.name}
							</Link>
						))}
					</Popover.Group>
					{localStorage.getItem('user') ? (
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<Switcher />
							<Menu as='div' className='relative ml-3'>
								<div>
									<Menu.Button className='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 '>
										<span className='sr-only'>Open user menu</span>
										<img
											className='h-10 w-10 rounded-full ring-2 ring-[#026bb0] ring-offset-2'
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
										/>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'>
									<Menu.Items className='absolute right-0 z-[10000] mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
										{userNavigation.map((item) => (
											<Menu.Item key={item.name}>
												{({ active }) => (
													<button
														onClick={() => (item.name ? handleSignOut() : null)}
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700 w-full text-left'
														)}>
														{item.name}
													</button>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					) : (
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<Switcher />
							<Link
								to='/login'
								className={classNames(
									darkMode ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-gray-900',
									'whitespace-nowrap text-base font-medium '
								)}>
								Sign in
							</Link>
							<Link
								to='/login'
								className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#026bb0] hover:bg-[#027ac9]'>
								Sign up
							</Link>
						</div>
					)}
				</div>
			</div>

			<Transition
				as={Fragment}
				enter='duration-200 ease-out'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='duration-100 ease-in'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'>
				<Popover.Panel
					focus
					className='absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden'>
					<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
						<div className='pt-5 pb-6 px-5'>
							<div className='flex items-center justify-between'>
								<div>
									<img className='h-8 w-auto' src='/nagwa.png' alt='Workflow' />
								</div>
								<div className='-mr-2'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
										<span className='sr-only'>Close menu</span>
										<XMarkIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
						</div>
						<div className='py-6 px-5 space-y-6'>
							<div className='grid grid-cols-2 gap-y-4 gap-x-8'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className='text-base font-medium text-gray-900 hover:text-gray-700'>
										{item.name}
									</Link>
								))}
							</div>

							<div>
								<Link
									to='/login'
									className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#026bb0] hover:bg-[#027ac9]'>
									Sign up
								</Link>
								<p className='mt-6 text-center text-base font-medium text-gray-500'>
									Existing customer?
									<Link to='/login' className='text-[#026bb0] hover:text-indigo-500'>
										Sign in
									</Link>
								</p>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Navbar;
