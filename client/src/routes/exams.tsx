import { Link } from 'react-router-dom';
import { classNames } from 'shared';
import { exams } from 'constant';

interface Props {}

const Exams: React.FC<Props> = () => {
	const examStyle = (examIdx: number) =>
		classNames(
			examIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
			examIdx === 1 ? 'sm:rounded-tr-lg' : '',
			examIdx === exams.length - 2 ? 'sm:rounded-bl-lg' : '',
			examIdx === exams.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
			'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 cursor-pointer'
		);
	return (
		<>
			<h1 className='text-center capitalize font-medium my-10 text-4xl'>Pick the Exam you want .!</h1>
			<div className='max-w-7xl mx-auto  divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0'>
				{exams.map((exam, examIdx) => (
					<Link to={exam.href} key={exam.title} className={examStyle(examIdx)}>
						<>
							<span
								className={classNames(
									exam.iconBackground,
									exam.iconForeground,
									'rounded-lg inline-flex p-3 ring-4 ring-white'
								)}>
								<exam.icon className='h-6 w-6' aria-hidden='true' />
							</span>
						</>

						<div className='mt-8'>
							<p className='focus:outline-none text-lg font-medium'>
								<span className='absolute inset-0' aria-hidden='true' />
								{exam.title}
							</p>
							<p className='mt-2 text-sm text-gray-500'>
								Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut
								at blanditiis et quo et molestiae.
							</p>
						</div>

						<span
							className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
							aria-hidden='true'>
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'>
								<path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
							</svg>
						</span>
					</Link>
				))}
			</div>
		</>
	);
};

export default Exams;
