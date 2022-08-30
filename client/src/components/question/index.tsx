import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { RadioGroup } from '@headlessui/react';

import { IQuestion } from 'models';
import { classNames } from 'shared';
import { QuestionProps } from 'HOCs/questions.hoc';
import { answers } from 'constant';

interface Props {
	data: IQuestion;
	formik: FormikProps<QuestionProps>;
}

const Question: React.FC<Props> = ({ data, formik }) => {
	const [selected, setSelected] = useState<string>('');
	const handleAnswer = (value: string) => {
		formik.setFieldValue(`selected[${formik.values.selected.length}]`, value);

		if (value === data.pos) {
			formik.setFieldValue('score', formik.values.score + 10);
		}
	};
	console.log(selected === data.pos);

	return (
		<div className='w-[500px] mt-20'>
			<p className='flex items-center justify-between w-full mb-10'>
				<span>
					Determine the type of this word <b className='font-bold capitalize text-[#026bb0]'>{data.word}</b> ?{' '}
				</span>
				<span>10 Points</span>
			</p>
			<RadioGroup value={selected} onChange={setSelected}>
				<RadioGroup.Label className='sr-only'> Pricing plans </RadioGroup.Label>
				{selected ? (
					<RadioGroup.Option
						value={selected}
						className={classNames(
							'relative border p-4 flex flex-col bg-indigo-50 border-indigo-200 z-10 cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md'
						)}>
						{({ active, checked }) => (
							<>
								<span className='flex items-center text-sm'>
									<span
										className={classNames(
											checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
											active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
											'h-4 w-4 rounded-full border flex items-center justify-center'
										)}
										aria-hidden='true'>
										<span className='rounded-full bg-white w-1.5 h-1.5' />
									</span>
									<RadioGroup.Label
										as='span'
										className={classNames(
											checked ? 'text-indigo-900' : 'text-gray-900',
											'ml-3 font-medium capitalize'
										)}>
										{selected}
									</RadioGroup.Label>
								</span>
							</>
						)}
					</RadioGroup.Option>
				) : (
					<div className='relative -space-y-px rounded-md bg-white'>
						{answers.map((plan, planIdx) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan.name}
								onClick={() => handleAnswer(plan.name)}
								className={({ checked }) =>
									classNames(
										formik.values?.selected[formik.values.selected.length] &&
											data.pos !== plan.name &&
											'hidden',
										planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
										planIdx === answers.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
										checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
										'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
									)
								}>
								{({ active, checked }) => (
									<>
										<span className='flex items-center text-sm'>
											<span
												className={classNames(
													checked
														? 'bg-indigo-600 border-transparent'
														: 'bg-white border-gray-300',
													active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
													'h-4 w-4 rounded-full border flex items-center justify-center'
												)}
												aria-hidden='true'>
												<span className='rounded-full bg-white w-1.5 h-1.5' />
											</span>
											<RadioGroup.Label
												as='span'
												className={classNames(
													checked ? 'text-indigo-900' : 'text-gray-900',
													'ml-3 font-medium capitalize'
												)}>
												{plan.name}
											</RadioGroup.Label>
										</span>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				)}
			</RadioGroup>
			{selected.length > 0 && (
				<h1
					className={classNames(
						selected.toLowerCase() !== data.pos.toLowerCase() ? 'text-red-800' : 'text-green-600',
						'mt-2'
					)}>
					{selected.toLowerCase() !== data.pos.toLowerCase() ? 'Wrong Answer' : 'Correct Answer'}
				</h1>
			)}
		</div>
	);
};

export default Question;
