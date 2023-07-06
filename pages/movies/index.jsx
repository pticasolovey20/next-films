import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesWithGenres } from "@/slices/dataSlice";

import * as Separator from "@radix-ui/react-separator";
import Layout from "@/components/layout";
import SkeletonCard from "@/components/skeleton";
import Movie from "@/components/movie";

const MoviesListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMoviesWithGenres({ page: 2 }));
	}, [dispatch]);

	const { loading, movies } = useSelector((state) => state.dataReducer);

	const sortedMovies = useMemo(() => {
		return movies.slice().sort((a, b) => b.popularity - a.popularity);
	}, [movies]);

	return (
		<Layout>
			<div className="mt-16 flex flex-col">
				<h1 className="flex text-[24px]">Movies</h1>
				<Separator.Root
					className="mb-4 bg-gray-600 separator"
					style={{ height: "2px" }}
					data-orientation="horizontal"
				/>
			</div>
			<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: sortedMovies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</Layout>
	);
};

export default MoviesListPage;
