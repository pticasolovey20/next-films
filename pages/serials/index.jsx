import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSerials } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Serial from "@/components/serial";
import SkeletonCard from "@/components/skeleton";
import Pagination from "@/components/pagination";

const SerialsListPage = () => {
	const dispatch = useDispatch();
	const { query, selectedPage } = useSelector((state) => state.dataReducer);

	useEffect(() => {
		dispatch(fetchSerials({ query, page: selectedPage }));
	}, [query, dispatch, selectedPage]);

	const { loading, serials } = useSelector((state) => state.dataReducer);

	const filteredSerials = useMemo(() => {
		return serials.serials?.filter((serial) => serial.poster_path !== null);
	}, [serials.serials]);

	return (
		<Layout>
			<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
				{loading
					? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
					: filteredSerials?.map((serial) => <Serial key={serial.id} {...serial} />)}
			</div>
			<Pagination totalPages={serials.totalPages} />
		</Layout>
	);
};

export default SerialsListPage;
