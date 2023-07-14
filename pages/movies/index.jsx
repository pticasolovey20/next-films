import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setMovieSelectedPage } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Movie from "@/components/movie";
import SkeletonComponent from "@/components/skeleton";
import Pagination from "@/components/pagination";

const MoviesListPage = () => {
	const dispatch = useDispatch();
	const { query, movieSelectedPage } = useSelector((state) => state.dataReducer);

	useEffect(() => {
		dispatch(fetchMovies({ query, page: movieSelectedPage }));
	}, [query, dispatch, movieSelectedPage]);

	const { loading, movies } = useSelector((state) => state.dataReducer);

	const filteredMovies = useMemo(() => {
		return movies.movies?.filter((movie) => movie.poster_path !== null);
	}, [movies.movies]);

	return (
		<Layout>
			<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => (
							<SkeletonComponent key={index} styles="flex h-[440px]" />
					  ))
					: filteredMovies?.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
			<Pagination totalPages={movies.totalPages} setAction={setMovieSelectedPage} />
		</Layout>
	);
};

export default MoviesListPage;
