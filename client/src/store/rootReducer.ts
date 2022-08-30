import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from 'slices';

const rootReducer = combineReducers({
	data: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
