import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetWords } from 'AsyncActions/getWords';
import { RootState } from 'store/rootReducer';
import { IQuestion } from '../models/question.model';
import { GetRank } from '../AsyncActions/getUserRank';

interface State {
	loading: boolean;
	errorMessage: string | null;
	words: IQuestion[];
	rank: number | null;
	answers: {
		selected: string[];
		score: number;
	};
	darkMode: boolean;
}

const initialState: State = {
	errorMessage: null,
	loading: false,
	words: [],
	rank: null,
	answers: {
		selected: [],
		score: 0
	},
	darkMode: false
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		handleAnswers: (state: State, { payload }: PayloadAction<{ selected: string[]; score: number }>) => {
			state.answers.selected = payload.selected;
			state.answers.score = payload.score;
		},
		changeMode: (state: State) => {
			state.darkMode = !state.darkMode;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(GetWords.pending, (state: State) => {
			state.loading = true;
		});
		builder.addCase(GetWords.fulfilled, (state: State, { payload }: PayloadAction<IQuestion[]>) => {
			state.words = payload;
			state.loading = false;
		});
		builder.addCase(GetWords.rejected, (state: State, { payload }: PayloadAction<any>) => {
			state.errorMessage = payload;
			state.loading = false;
		});
		builder.addCase(GetRank.pending, (state: State) => {
			state.loading = true;
		});
		builder.addCase(GetRank.fulfilled, (state: State, { payload }: PayloadAction<{ rank: number }>) => {
			state.rank = payload.rank;
			state.loading = false;
		});
		builder.addCase(GetRank.rejected, (state: State, { payload }: PayloadAction<any>) => {
			state.errorMessage = payload;
			state.loading = false;
		});
	}
});

export const { handleAnswers, changeMode } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
export const dataState = (state: RootState) => state.data;
