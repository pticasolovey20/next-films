import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesWithGenres, fetchTvSerialsWithGenres } from "@/slices/data/dataSlice";

import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

import Layout from "@/components/layout";
import Movie from "@/components/movie";
import Serial from "@/components/serial";
import SkeletonCard from "@/components/skeleton";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMoviesWithGenres());
		dispatch(fetchTvSerialsWithGenres());
	}, [dispatch]);

	const { movies, serials, loading } = useSelector((state) => state.dataReducer);

	return (
		<Layout>
			<div className="flex items-center justify-between gap-4 mt-8">
				<h1 className="flex text-[24px]">Movies Section</h1>
				<Link href="/movies" className="text-gray-300 tracking-wide px-3 py-1 hover:text-white">
					show more...
				</Link>
			</div>
			<Separator.Root
				className="mb-4 bg-gray-600 separator"
				style={{ height: "2px" }}
				data-orientation="horizontal"
			/>
			<div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: movies.slice(0, 5).map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>

			<div className="flex items-center justify-between gap-4 mt-4">
				<h1 className="flex text-[24px]">TV Series Section</h1>
				<Link href="/movies" className="text-gray-300 tracking-wide px-3 py-1 hover:text-white">
					show more...
				</Link>
			</div>
			<Separator.Root
				className="mb-4 bg-gray-600 separator"
				style={{ height: "2px" }}
				data-orientation="horizontal"
			/>
			<div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: serials.slice(0, 5).map((serial) => <Serial key={serial.id} {...serial} />)}
			</div>
		</Layout>
	);
};

export default Home;
