import { Link } from 'react-router-dom';
import { dataState } from 'slices';
import { useAppSelector } from 'store';
import { handleSignOut } from 'shared';
const Rank = () => {
	const { rank } = useAppSelector(dataState);

	return (
		<main className='sm:flex mx-auto max-w-max min-h-full bg-white px-4 py-16 sm:px-6 sm:py-40 md:grid md:place-items-center lg:px-8'>
			<div className='sm:ml-6'>
				<div className='flex lg:flex-row flex-col items-start justify-end gap-3'>
					<p className='text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl'>{rank}</p>
					<div className='sm:border-l sm:border-gray-200 sm:pl-6'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Is Your Rank</h1>
						<p className='mt-1 text-base text-gray-500 max-w-md'>
							Thanks for taking this exam we hope to see you leveling up your career.
						</p>
					</div>
				</div>

				<div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-28'>
					<Link
						to='/'
						className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
						Go home
					</Link>
					<Link
						to='/exams/english'
						className='inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
						Try Again
					</Link>
					<button
						onClick={handleSignOut}
						className='inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
						Sign Out
					</button>
				</div>
			</div>
		</main>
	);
};
export default Rank;
