import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesWithGenres, fetchTvSerialsWithGenres } from "@/slices/dataSlice";

import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

import Layout from "@/components/layout";
import SliderComponent from "@/components/slider";
import SkeletonCard from "@/components/skeleton";
import Movie from "@/components/movie";
import Serial from "@/components/serial";

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
			<SliderComponent>
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</SliderComponent>
			<div className="flex items-center justify-between gap-4 mt-4">
				<h1 className="flex text-[24px]">TV Series Section</h1>
				<Link href="/serials" className="text-gray-300 tracking-wide px-3 py-1 hover:text-white">
					show more...
				</Link>
			</div>
			<Separator.Root
				className="mb-4 bg-gray-600 separator"
				style={{ height: "2px" }}
				data-orientation="horizontal"
			/>
			<SliderComponent>
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: serials.map((serial) => <Serial key={serial.id} {...serial} />)}
			</SliderComponent>
		</Layout>
	);
};

export default Home;
