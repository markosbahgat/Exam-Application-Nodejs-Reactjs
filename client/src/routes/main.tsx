import React from 'react';
import { classNames } from 'shared';
import { dataState } from 'slices';
import { useAppSelector } from 'store';

interface Props {}

const Main: React.FC<Props> = () => {
	const { darkMode } = useAppSelector(dataState);
	return (
		<main
			className={classNames(darkMode ? 'bg-gray-900' : 'bg-white', 'lg:relative  overflow-hidden lg:h-screen ')}>
			<div className='mx-auto w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
				<div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
					<h1 className='text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
						<span className={classNames(darkMode ? 'text-white' : '', 'block xl:inline')}>Start your</span>{' '}
						<span className='block text-[#026bb0] xl:inline'>online exam </span>{' '}
						<span className={classNames(darkMode ? 'text-white' : '', 'block xl:inline')}>
							and get your rank
						</span>{' '}
						<span className='block text-[#026bb0] xl:inline'>now.!</span>
					</h1>

					<p className='mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-xl'>
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
						sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>

					<div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
						<div className='rounded-md shadow'>
							<a
								href='/exams'
								className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#026bb0] hover:bg-[#027ac9] md:py-4 md:text-lg md:px-10'>
								Get started
							</a>
						</div>
						<div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
							<a
								href='/exams'
								className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#026bb0] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
								Live demo
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-[90vh]'>
				<img
					className='absolute inset-0 w-full h-full object-cover'
					src='https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
					alt=''
				/>
			</div>
		</main>
	);
};

export default Main;
