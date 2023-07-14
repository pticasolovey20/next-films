import Details from "@/components/details-tabs/details";
import LikeThis from "@/components/details-tabs/more-like-this";
import Overview from "@/components/details-tabs/overview";
import Trailers from "@/components/details-tabs/trailers";

export const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

export const genres = [
	{ id: 1, option: "Action" },
	{ id: 2, option: "Comedy" },
	{ id: 3, option: "Family" },
	{ id: 4, option: "History" },
	{ id: 5, option: "Mystery" },
	{ id: 6, option: "Sci-Fi" },
	{ id: 7, option: "War" },
	{ id: 8, option: "Adventure" },
	{ id: 9, option: "Crime" },
	{ id: 10, option: "Fantasy" },
	{ id: 11, option: "Horror" },
	{ id: 12, option: "News" },
	{ id: 13, option: "Sport" },
	{ id: 14, option: "Western" },
	{ id: 15, option: "Animation" },
	{ id: 16, option: "Documentary" },
	{ id: 17, option: "Film-Noir" },
	{ id: 18, option: "Music" },
	{ id: 19, option: "Reality-TV" },
	{ id: 20, option: "Talk-Show" },
	{ id: 21, option: "Biography" },
	{ id: 22, option: "Drama" },
	{ id: 23, option: "Game-Show" },
	{ id: 24, option: "Musical" },
	{ id: 25, option: "Romance" },
	{ id: 26, option: "Thriller" },
];

export const movies = [
	{
		title: "John Wick: Chapter 4",
		description: "(2023)",
		genreList: [
			{ key: "Action", value: "Action" },
			{ key: "Crime", value: "Crime" },
			{ key: "Thriller", value: "Thriller" },
		],
		id: "tt10366206",
		imDbRating: "7.9",
		metacriticRating: "78",
		image: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_Ratio0.6837_AL_.jpg",
		runtimeStr: "169 min",
	},
	{
		title: "Fast X",
		description: "(2023)",
		genreList: [
			{ key: "Action", value: "Action" },
			{ key: "Adventure", value: "Adventure" },
			{ key: "Crime", value: "Crime" },
		],
		id: "tt5433140",
		imDbRating: "6.1",
		metacriticRating: "55",
		image: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6837_AL_.jpg",
		runtimeStr: "141 min",
	},
	{
		title: "Guardians of the Galaxy Vol. 3",
		description: "(2023)",
		genreList: [
			{ key: "Action", value: "Action" },
			{ key: "Adventure", value: "Adventure" },
			{ key: "Comedy", value: "Comedy" },
		],
		id: "tt6791350",
		imDbRating: "8.2",
		metacriticRating: "64",
		image: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6837_AL_.jpg",
		runtimeStr: "150 min",
	},
	{
		title: "Dungeons & Dragons: Honor Among Thieves",
		description: "(2023)",
		genreList: [
			{ key: "Adventure", value: "Adventure" },
			{ key: "Family", value: "Family" },
			{ key: "Fantasy", value: "Fantasy" },
		],
		id: "tt2906216",
		imDbRating: "7.3",
		metacriticRating: "72",
		image: "https://m.media-amazon.com/images/M/MV5BNmFkN2M2NzItOTY5YS00MmE2LTk3ZjctNTk2YzQ5ZmRiYzJjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6837_AL_.jpg",
		runtimeStr: "134 min",
	},
	{
		title: "The Little Mermaid",
		description: "(2023)",
		genreList: [
			{ key: "Adventure", value: "Adventure" },
			{ key: "Family", value: "Family" },
			{ key: "Fantasy", value: "Fantasy" },
		],
		id: "tt5971474",
		imDbRating: "7.2",
		metacriticRating: "59",
		image: "https://m.media-amazon.com/images/M/MV5BYTUxYjczMWUtYzlkZC00NTcwLWE3ODQtN2I2YTIxOTU0ZTljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6837_AL_.jpg",
		runtimeStr: "135 min",
	},
];

export const triggers = [
	{ label: "overview", value: "first", id: 1 },
	{ label: "trailers & more", value: "second", id: 2 },
	{ label: "more like this", value: "third", id: 3 },
	{ label: "details", value: "fourth", id: 4 },
];

export const tabs = [
	{ content: <Overview />, id: 1, value: "first" },
	{ content: <Trailers />, id: 2, value: "second" },
	{ content: <LikeThis />, id: 3, value: "third" },
	{ content: <Details />, id: 4, value: "fourth" },
];
