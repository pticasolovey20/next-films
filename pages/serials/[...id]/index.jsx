import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSerialDetails } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Image from "next/image";
import Rating from "@/components/rating";
import TabsComponent from "@/components/tabs";

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
	const FALLBACK_IMAGE = "/fallback.png";

	return (
		<Layout>
			<div className="w-full grid grid-cols-5">
				<Image
					className="mt-10 col-span-2 flex-1 object-cover cursor-pointer"
					src={serialDetails?.poster_path === null ? FALLBACK_IMAGE : PATH}
					alt={serialDetails?.name || ""}
					width={500}
					height={500}
					loading="lazy"
				/>
				<div className="col-span-3 mt-12 px-8 py-6 flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<div className="flex items-end justify-between">
							<h1 className="text-4xl">{serialDetails?.name}</h1>
							<Rating
								gap={2}
								width={30}
								height={30}
								font={20}
								rating={serialDetails?.vote_average.toFixed(1)}
							/>
						</div>

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
					</div>
					<TabsComponent triggers={triggers} tabs={tabs} />
				</div>
			</div>
		</Layout>
	);
};

export default SerialDetailPage;
