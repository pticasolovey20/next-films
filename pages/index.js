import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchSerials, setQuery } from "@/slices/dataSlice";

import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

import Layout from "@/components/layout";
import SliderComponent from "@/components/slider";
import SkeletonCard from "@/components/skeleton";
import Movie from "@/components/movie";
import Serial from "@/components/serial";
import Description from "@/components/description";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setQuery(""));
		dispatch(fetchMovies({ page: 1 }));
		dispatch(fetchSerials({ page: 1 }));
	}, [dispatch]);

	const { movies, serials, loading } = useSelector((state) => state.dataReducer);

	const filteredMovies = useMemo(() => {
		return movies.movies?.filter((movie) => movie.poster_path !== null);
	}, [movies.movies]);

	const filteredSerials = useMemo(() => {
		return serials.serials?.filter((serial) => serial.poster_path !== null);
	}, [serials.serials]);

	return (
		<Layout>
			<div className="mx-1">
				<div className="flex items-center justify-between gap-4 mt-8">
					<h1 className="flex text-[24px]">Movies</h1>
					<Link href="/movies" className="text-gray-300 tracking-wide px-3 py-1 hover:text-white">
						show more...
					</Link>
				</div>
				<Separator.Root
					className="mb-4 bg-gray-600 separator"
					style={{ height: "2px" }}
					data-orientation="horizontal"
				/>
			</div>
			<SliderComponent>
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: filteredMovies?.map((movie) => <Movie key={movie.id} {...movie} />)}
			</SliderComponent>
			<div className="mx-1">
				<div className="flex items-center justify-between gap-4 mt-4">
					<h1 className="flex text-[24px]">TV Serials</h1>
					<Link href="/serials" className="text-gray-300 tracking-wide px-3 py-1 hover:text-white">
						show more...
					</Link>
				</div>
				<Separator.Root
					className="mb-4 bg-gray-600 separator"
					style={{ height: "2px" }}
					data-orientation="horizontal"
				/>
			</div>
			<SliderComponent>
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: filteredSerials?.map((serial) => <Serial key={serial.id} {...serial} />)}
			</SliderComponent>
			<Description />
		</Layout>
	);
};

export default Home;
