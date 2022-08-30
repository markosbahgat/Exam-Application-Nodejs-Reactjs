import Question from 'components/question';
import Steps from 'components/progress';
import { useState } from 'react';
import { dataState } from 'slices';
import { useAppDispatch, useAppSelector } from 'store';
import { useFormik } from 'formik';
import { GetRank } from 'AsyncActions/getUserRank';
import { useNavigate, Navigate } from 'react-router-dom';
import { QuestionSchema } from '../schemas/question.schema';

interface Props {}

export interface QuestionProps {
	selected: string[];
	score: number;
}

const Questions: React.FC<Props> = () => {
	const { words, answers } = useAppSelector(dataState);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const initialValues: QuestionProps = answers;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues,
		validationSchema: QuestionSchema(currentStep),
		validateOnChange: false,
		onSubmit(values, Helpers) {
			Helpers.setTouched({});
			Helpers.setSubmitting(false);
			if (values.selected.length === 10) {
				dispatch(GetRank({ score: values.score }));
				navigate('/rank');
			}
			setCurrentStep((step) => step + 1);
		}
	});

	const handleBackStep = () => {
		setCurrentStep((step) => (step !== 0 ? step - 1 : 0));
	};

	if (currentStep < 5) {
		return (
			<form
				className='flex flex-col items-center justify-between py-20'
				onSubmit={formik.handleSubmit}
				noValidate>
				<Steps currentStep={currentStep} formik={formik} />
				<div className='flex-row flex items-center gap-20 justify-center'>
					{words?.slice(currentStep * 2, (currentStep + 1) * 2).map((item, index) => (
						<Question key={item.id} data={item} formik={formik} />
					))}
				</div>
				{formik.errors.selected && (
					<span className='font-medium text-red-800 mt-10'>{formik.errors.selected}</span>
				)}

				<div className='mt-32 flex flex-row items-center justify-center gap-8'>
					<button
						onClick={handleBackStep}
						type='button'
						className='w-[160px] h-[45px] font-medium text-lg ring-2 ring-[#026bb0] rounded-md text-[#026bb0]'>
						Back
					</button>
					<button
						type='submit'
						className='w-[160px] h-[45px] font-medium text-lg ring-2 ring-[#026bb0] rounded-md text-white bg-[#026bb0]'>
						Next
					</button>
				</div>
			</form>
		);
	}
	return <Navigate to='/rank' replace />;
};

export default Questions;
