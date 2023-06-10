import { useState, useEffect } from "react";
import getConfig from "next/config";
import axios from "axios";

import Layout from "@/components/layout";
import * as Separator from "@radix-ui/react-separator";
import Movie from "@/components/movie";
import NavigationComponent from "@/components/ui/navigation/Navigation";

const { serverRuntimeConfig } = getConfig();

const Home = (data) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies(data?.movies?.results);
	}, [data]);

	return (
		<Layout>
			<div>
				<NavigationComponent />
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<h1 className="flex text-[24px]">Popular movies</h1>
					<button className="pt-2">all</button>
				</div>
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

export const getServerSideProps = async () => {
	const { data } = await axios.get(
		`https://imdb-api.com/en/API/AdvancedSearch/${serverRuntimeConfig.apiKey}?title_type=feature&count=10`
	);

	return {
		props: {
			movies: data,
		},
	};
};
