import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSerialDetails } from "@/slices/dataSlice";

import Layout from "@/components/layout";
import Image from "next/image";

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
			<Image
				className="mt-10 flex-1 object-cover cursor-pointer"
				src={serialDetails?.poster_path === null ? FALLBACK_IMAGE : PATH}
				alt={serialDetails?.name}
				width={350}
				height={525}
				loading="lazy"
			/>
		</Layout>
	);
};

export default SerialDetailPage;
