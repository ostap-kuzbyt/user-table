import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Users } from '../types/users';

interface UsersState {
	users: Users[];
	loading: boolean;
	error: string | null;
	search: string;
}

const initialState: UsersState = {
	users: [],
	loading: false,
	error: null,
	search: '',
};

export const fetchUsers = createAsyncThunk<Users[]>(
	'users/fetchUsers',
	async () => {
		const response = await axios.get<Users[]>(
			'https://jsonplaceholder.typicode.com/users'
		);
		return response.data;
	}
);

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUserSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchUsers.fulfilled,
				(state, action: PayloadAction<Users[]>) => {
					state.loading = false;
					state.users = action.payload;
				}
			)
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Something went wrong';
			});
	},
});

export const { setUserSearch } = userSlice.actions;
export const userReducer = userSlice.reducer;
