import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "56073c34de2dea2eb832689266b31077";

const initialState = {
	movies: [],
	serials: [],
	loading: false,
	error: null,
};

export const fetchMoviesWithGenres = createAsyncThunk(
	"movies/fetchMoviesWithGenres",
	async (_, { rejectWithValue }) => {
		try {
			const moviesResponse = await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&year=24717925`);
			const genresResponse = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);

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

			return updatedMovies;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchTvSerialsWithGenres = createAsyncThunk(
	"tvSerials/fetchTvServialsWithGenres",
	async (_, { rejectWithValue }) => {
		try {
			const serialsReponse = await axios.get(`${BASE_URL}discover/tv?api_key=${API_KEY}`);
			const genresResponse = await axios.get(`${BASE_URL}genre/tv/list?api_key=${API_KEY}`);

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

			return updatedSerials;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//

		builder.addCase(fetchMoviesWithGenres.pending, (state) => {
			// state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchMoviesWithGenres.fulfilled, (state, action) => {
			state.movies = action.payload;
			// state.loading = false;
		});
		builder.addCase(fetchMoviesWithGenres.rejected, (state, action) => {
			state.error = action.payload;
			// state.loading = false;
		});

		//

		builder.addCase(fetchTvSerialsWithGenres.pending, (state) => {
			// state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchTvSerialsWithGenres.fulfilled, (state, action) => {
			state.serials = action.payload;
			// state.loading = false;
		});
		builder.addCase(fetchTvSerialsWithGenres.rejected, (state, action) => {
			state.error = action.payload;
			// state.loading = false;
		});
	},
});

export default dataSlice.reducer;
