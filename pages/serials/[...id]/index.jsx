import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSerialDetails } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Image from "next/image";
import Rating from "@/components/rating";
import TabsComponent from "@/components/tabs";
import SkeletonComponent from "@/components/skeleton";

import { tabs, triggers } from "@/constants";
import { classNames } from "@/utils";

const SerialDetailPage = () => {
	const { asPath } = useRouter();
	const dispatch = useDispatch();
	const id = asPath.replace(/\D/g, "");

	useEffect(() => {
		id && dispatch(fetchSerialDetails({ id }));
	}, [id, dispatch]);

	const { serialDetails } = useSelector((state) => state.dataReducer);

	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${serialDetails?.poster_path}`;

	return (
		<Layout>
			<div className="mt-10 flex lg:grid lg:grid-cols-5 ">
				<div className="hidden lg:block lg:col-span-2">
					{serialDetails?.poster_path ? (
						<Image
							className="object-cover cursor-pointer"
							src={PATH}
							alt={serialDetails?.name || ""}
							width={500}
							height={500}
							loading="lazy"
						/>
					) : (
						<SkeletonComponent width="100%" styles="h-[650px] xl:h-[700px] 2xl:h-[750px]" />
					)}
				</div>
				<div className="w-full lg:col-span-3 px-4 flex flex-col gap-8">
					<div className="flex justify-between">
						<div className="lg:mt-10 w-2/3 lg:w-full flex flex-col gap-3">
							<div className="flex items-center justify-between pr-3 md:pr-6">
								{serialDetails ? (
									<h1 className="text-2xl md:text-3xl lg:text-4xl max-w-[80%] truncate">
										{serialDetails?.name}
									</h1>
								) : (
									<SkeletonComponent width="70%" styles="h-[35px]" />
								)}
								<Rating
									gap={2}
									width={30}
									height={30}
									font={20}
									rating={serialDetails?.vote_average.toFixed(1)}
								/>
							</div>
							{serialDetails ? (
								<div className="flex gap-1 text-md text-dark-600">
									<p className="pr-2 border-r border-dark-600">
										{serialDetails?.first_air_date?.slice(0, 4)}
									</p>
									<p
										className={classNames(
											"px-2 border-r border-transparent",
											serialDetails?.adult && "border-dark-600"
										)}
									>
										{`${serialDetails?.number_of_seasons} seasons ${serialDetails?.number_of_episodes} episodes`}
									</p>
									{serialDetails?.adult && <p className="pl-2">18+</p>}
								</div>
							) : (
								<SkeletonComponent styles="h-[25px]" width="150px" />
							)}
						</div>
						<div className="w-1/4 lg:hidden">
							{serialDetails?.poster_path ? (
								<Image
									className="object-cover cursor-pointer"
									src={PATH}
									alt={serialDetails?.name || ""}
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

export default SerialDetailPage;
