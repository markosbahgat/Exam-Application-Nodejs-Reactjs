import { createAsyncThunk } from '@reduxjs/toolkit';
import { IQuestion } from 'models';
import axios from 'axios';

interface FetchError {
	errorMessage: string | null;
}
export const GetWords = createAsyncThunk<IQuestion[], undefined, { rejectValue: FetchError }>(
	'words/get',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/get-words`);
			const data: IQuestion[] = await response.data;
			console.log(data);

			return data;
		} catch (error: any) {
			return rejectWithValue(error);
		}
	}
);
