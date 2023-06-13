import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/slices/movies/moviesSlice";

import * as Separator from "@radix-ui/react-separator";
import Layout from "@/components/layout";
import NavigationComponent from "@/components/ui/navigation/Navigation";
import InputComponent from "@/components/ui/input";
import Movie from "@/components/movie";

const Home = () => {
	const dispatch = useDispatch();

	const type = "feature";
	const count = 10;

	useEffect(() => {
		dispatch(fetchMovies({ type, count }));
	}, [dispatch]);

	const { movies } = useSelector((state) => state.moviesReducer);

	return (
		<Layout>
			<NavigationComponent />
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<h1 className="flex text-[24px]">Movies Section</h1>
				</div>
				<InputComponent placeholder="Search..." />
			</div>
			<Separator.Root
				className="my-4 bg-gray-600 separator"
				style={{ height: "2px" }}
				data-orientation="horizontal"
			/>
			<div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
				{movies?.length && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</Layout>
	);
};

export default Home;
