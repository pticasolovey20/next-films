import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const initialState = {
	movies: [],
	serials: [],
	movieDetails: null,
	serialDetails: null,
	query: "",
	movieSelectedPage: 1,
	serialSelectedPage: 1,
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

export const fetchMovieDetails = createAsyncThunk(
	"movieDetails/fetchMovieDetails",
	async (params, { rejectWithValue }) => {
		const { id } = params;
		try {
			if (id) {
				const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
				return data;
			}
		} catch (error) {
			return rejectWithValue({ message: error.message });
		}
	}
);

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

export const fetchSerialDetails = createAsyncThunk(
	"serialDetails/fetchSerialDetails",
	async (params, { rejectWithValue }) => {
		const { id } = params;
		try {
			if (id) {
				const { data } = await axios.get(`${BASE_URL}tv/${id}?api_key=${API_KEY}`);
				return data;
			}
		} catch (error) {
			return rejectWithValue({ message: error.message });
		}
	}
);

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},

		setMovieSelectedPage(state, action) {
			state.movieSelectedPage = action.payload;
		},

		setSerialSelectedPage(state, action) {
			state.serialSelectedPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		// movies

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

		// movie details

		builder.addCase(fetchMovieDetails.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
			state.movieDetails = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchMovieDetails.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});

		// serials

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

		// serial details

		builder.addCase(fetchSerialDetails.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchSerialDetails.fulfilled, (state, action) => {
			state.serialDetails = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchSerialDetails.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});
	},
});

export const { setQuery, setMovieSelectedPage, setSerialSelectedPage } = dataSlice.actions;
export default dataSlice.reducer;
