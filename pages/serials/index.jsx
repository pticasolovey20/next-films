import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvSerialsWithGenres } from "@/slices/dataSlice";

import * as Separator from "@radix-ui/react-separator";
import Layout from "@/components/layout";
import SkeletonCard from "@/components/skeleton";
import Serial from "@/components/serial";

const SerialsListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTvSerialsWithGenres({ page: 2 }));
	}, [dispatch]);

	const { loading, serials } = useSelector((state) => state.dataReducer);

	const sortedSerials = useMemo(() => {
		return serials.slice().sort((a, b) => b.popularity - a.popularity);
	}, [serials]);

	return (
		<Layout>
			<div className="mt-16 flex flex-col">
				<h1 className="flex text-[24px]">Serials</h1>
				<Separator.Root
					className="mb-4 bg-gray-600 separator"
					style={{ height: "2px" }}
					data-orientation="horizontal"
				/>
			</div>
			<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: sortedSerials.map((movie) => <Serial key={movie.id} {...movie} />)}
			</div>
		</Layout>
	);
};

export default SerialsListPage;
