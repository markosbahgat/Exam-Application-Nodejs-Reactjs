import { CheckIcon } from '@heroicons/react/20/solid';
import { FormikProps } from 'formik';
import { classNames } from 'shared';

interface Props {
	currentStep: number;
	formik: FormikProps<{ selected: string[]; score: number }>;
}

const Steps: React.FC<Props> = ({ currentStep, formik }) => {
	const steps = [0, 1, 2, 3, 4];
	const progress = (formik.values.selected.length / 10) * 100;
	return (
		<nav aria-label='Progress'>
			<ol className='flex items-center'>
				{steps.map((step, stepIdx) => (
					<li
						key={step}
						className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
						{step < currentStep ? (
							<>
								<div className='absolute inset-0 flex items-center' aria-hidden='true'>
									<div className='h-0.5 w-full bg-[#e51d74]' />
								</div>
								<p className='relative flex h-8 w-8 items-center justify-center rounded-full bg-[#e51d74] hover:bg-indigo-900'>
									<CheckIcon className='h-5 w-5 text-white' aria-hidden='true' />
								</p>
							</>
						) : step === currentStep ? (
							<>
								<h1 className='absolute inset-0 -top-8 whitespace-nowrap'>{progress} %</h1>
								<>
									<div className='absolute inset-0 flex items-center' aria-hidden='true'>
										<div className='h-0.5 w-full bg-gray-200' />
									</div>
									<p
										className='relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#e51d74] bg-white'
										aria-current='step'>
										<span className='h-2.5 w-2.5 rounded-full bg-[#e51d74]' aria-hidden='true' />
									</p>
								</>
							</>
						) : (
							<>
								<div className='absolute inset-0 flex items-center' aria-hidden='true'>
									<div className='h-0.5 w-full bg-gray-200' />
								</div>
								<p className='group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400'>
									<span
										className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300'
										aria-hidden='true'
									/>
								</p>
							</>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};
export default Steps;
