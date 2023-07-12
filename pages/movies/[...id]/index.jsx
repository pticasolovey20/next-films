import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Image from "next/image";

const MovieDetailPage = () => {
	const { asPath } = useRouter();
	const dispatch = useDispatch();
	const id = asPath.replace(/\D/g, "");

	useEffect(() => {
		id && dispatch(fetchMovieDetails({ id }));
	}, [id, dispatch]);

	const { movieDetails } = useSelector((state) => state.dataReducer);

	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${movieDetails?.poster_path}`;
	const FALLBACK_IMAGE = "/fallback.png";

	return (
		<Layout>
			<div className="mt-[40px]">{movieDetails?.original_title}</div>
			<Image
				className="flex-1 object-cover cursor-pointer"
				src={movieDetails?.poster_path === null ? FALLBACK_IMAGE : PATH}
				alt={movieDetails?.title}
				width={350}
				height={525}
				loading="lazy"
			/>
		</Layout>
	);
};

export default MovieDetailPage;
