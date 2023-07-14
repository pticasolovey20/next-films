import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Image from "next/image";
import Rating from "@/components/rating";
import TabsComponent from "@/components/tabs";
import SkeletonComponent from "@/components/skeleton";

import { classNames, convertRuntime } from "@/utils";
import { tabs, triggers } from "@/constants";

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

	return (
		<Layout>
			<div className="mt-10 flex lg:grid lg:grid-cols-5 ">
				<div className="hidden lg:block lg:col-span-2">
					{movieDetails?.poster_path ? (
						<Image
							className="object-cover cursor-pointer"
							src={PATH}
							alt={movieDetails?.title || ""}
							width={500}
							height={500}
						/>
					) : (
						<SkeletonComponent styles="100% h-[650px] xl:h-[700px] 2xl:h-[750px]" />
					)}
				</div>
				<div className="w-full lg:col-span-3 px-4 flex flex-col gap-8">
					<div className="flex justify-between">
						<div className="lg:mt-10 w-2/3 lg:w-full flex flex-col gap-3">
							<div className="flex items-center justify-between pr-3 md:pr-6">
								{movieDetails ? (
									<h1 className="text-2xl md:text-3xl lg:text-4xl max-w-[80%] truncate">
										{movieDetails?.title}
									</h1>
								) : (
									<SkeletonComponent width="70%" styles="h-[35px]" />
								)}
								<Rating
									gap={2}
									width={30}
									height={30}
									font={20}
									rating={movieDetails?.vote_average.toFixed(1)}
								/>
							</div>
							{movieDetails ? (
								<div className="flex gap-1 text-md text-dark-600">
									<p className="pr-2 border-r border-dark-600">
										{movieDetails?.release_date?.slice(0, 4)}
									</p>
									<p
										className={classNames(
											"px-2 border-r border-transparent",
											movieDetails?.adult && "border-dark-600"
										)}
									>
										{convertRuntime(movieDetails?.runtime)}
									</p>
									{movieDetails?.adult && <p className="pl-2">18+</p>}
								</div>
							) : (
								<SkeletonComponent styles="h-[25px]" width="150px" />
							)}
						</div>
						<div className="w-1/4 lg:hidden">
							{movieDetails?.poster_path ? (
								<Image
									className="object-cover cursor-pointer"
									src={PATH}
									alt={movieDetails?.title || ""}
									width={500}
									height={500}
									loading="lazy"
								/>
							) : (
								<SkeletonComponent width="100%" styles="sm:h-[200px] md:h-[300px]" />
							)}
						</div>
					</div>
					<TabsComponent triggers={triggers} tabs={tabs} />
				</div>
			</div>
		</Layout>
	);
};

export default MovieDetailPage;
