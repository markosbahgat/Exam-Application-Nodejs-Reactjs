import * as Yup from 'yup';

export const QuestionSchema = (currentStep: number) =>
	Yup.object().shape({
		selected: Yup.array()
			.of(Yup.string().oneOf(['noun', 'verb', 'adverb', 'adjective'], 'Wrong Answer'))
			.min((currentStep + 1) * 2, 'Please Answer all the above questions')
			.required('You must answer this question.!')
	});
