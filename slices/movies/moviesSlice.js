import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://imdb-api.com/en/API/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const initialState = {
	topMovies: [],
	movies: [],
	loading: false,
	error: null,
};

export const fetchTopMovies = createAsyncThunk("topMovies/fetchTopMovies", async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(`${BASE_URL}MostPopularMovies/${API_KEY}`);
		return data.items;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async ({ type, count }, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(`${BASE_URL}AdvancedSearch/${API_KEY}?title_type=${type}&count=${count}`);
		return data.results;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// top movies

		builder.addCase(fetchTopMovies.pending, (state) => {
			// state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchTopMovies.fulfilled, (state, action) => {
			state.topMovies = action.payload;
			// state.loading = false;
		});
		builder.addCase(fetchTopMovies.rejected, (state, action) => {
			state.error = action.payload;
			// state.loading = false;
		});

		//

		builder.addCase(fetchMovies.pending, (state) => {
			// state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.movies = action.payload;
			// state.loading = false;
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.error = action.payload;
			// state.loading = false;
		});
	},
});

export default moviesSlice.reducer;
