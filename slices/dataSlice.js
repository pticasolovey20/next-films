import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const initialState = {
	movies: [],
	serials: [],
	query: "",
	selectedPage: 1,
	loading: false,
	error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (params, { rejectWithValue }) => {
	const { query, page } = params;
	try {
		if (query) {
			const { data } = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
			const totalPages = data.total_pages;

			return { movies: data.results, totalPages: totalPages };
		} else {
			const moviesResponse = await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&page=${page}`);
			const genresResponse = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);

			const totalPages = moviesResponse.data.total_pages;

			const movies = moviesResponse.data.results;
			const genres = genresResponse.data.genres;

			const updatedMovies = movies.map((movie) => {
				const genreNames = movie.genre_ids.map((genreId) => {
					const genre = genres.find((genre) => genre.id === genreId);
					return genre ? genre.name : "";
				});

				return {
					...movie,
					genres: genreNames.join(),
				};
			});

			return { movies: updatedMovies, totalPages: totalPages };
		}
	} catch (error) {
		return rejectWithValue({ message: error.message });
	}
});

export const fetchSerials = createAsyncThunk("serials/fetchSerials", async (params, { rejectWithValue }) => {
	const { query, page } = params;
	try {
		if (query) {
			const { data } = await axios.get(`${BASE_URL}search/tv?api_key=${API_KEY}&query=${query}&page=${page}`);

			const totalPages = data.total_pages;

			return { serials: data.results, totalPages: totalPages };
		} else {
			const serialsReponse = await axios.get(`${BASE_URL}discover/tv?api_key=${API_KEY}&page=${page}`);
			const genresResponse = await axios.get(`${BASE_URL}genre/tv/list?api_key=${API_KEY}`);

			const totalPages = serialsReponse.data.total_pages;

			const serials = serialsReponse.data.results;
			const genres = genresResponse.data.genres;

			const updatedSerials = serials.map((serial) => {
				const genreNames = serial.genre_ids.map((genreId) => {
					const genre = genres.find((genre) => genre.id === genreId);
					return genre ? genre.name : "";
				});

				return {
					...serial,
					genres: genreNames.join(),
				};
			});

			return { serials: updatedSerials, totalPages: totalPages };
		}
	} catch (error) {
		return rejectWithValue({ message: error.message });
	}
});

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},
		setSelectedPage(state, action) {
			state.selectedPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		//

		builder.addCase(fetchMovies.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.movies = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});

		//

		builder.addCase(fetchSerials.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchSerials.fulfilled, (state, action) => {
			state.serials = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchSerials.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});
	},
});

export const { setQuery, setSelectedPage } = dataSlice.actions;
export default dataSlice.reducer;
