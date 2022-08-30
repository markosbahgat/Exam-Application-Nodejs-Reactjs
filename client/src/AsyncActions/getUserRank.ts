import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchError {
	errorMessage: string | null;
}
export const GetRank = createAsyncThunk<{ rank: number }, { score: number }, { rejectValue: FetchError }>(
	'rank/get',
	async ({ score }: { score: number }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/rank`, { score });
			const data: { rank: number } = await response.data;

			return data;
		} catch (error: any) {
			return rejectWithValue(error);
		}
	}
);
