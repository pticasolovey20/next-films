import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedPage } from "@/slices/dataSlice";
import ReactPaginate from "react-paginate";
import PrevArrowIcon from "../icons/PrevArrowIcon";
import NextArrowIcon from "../icons/NextArrowIcon";
import { classNames } from "@/utils";

const Pagination = ({ totalPages, setAction }) => {
	const dispatch = useDispatch();

	return (
		<div className="flex justify-center mt-4">
			<ReactPaginate
				nextLabel={<NextArrowIcon w="30" h="30" />}
				previousLabel={<PrevArrowIcon w="30" h="30" />}
				onPageChange={(event) => dispatch(setAction(event.selected + 1))}
				// ----
				pageRangeDisplayed={9}
				marginPagesDisplayed={0}
				pageCount={totalPages || 0}
				// ---
				pageClassName={classNames(
					"flex items-center justify-center h-[40px] min-w-[40px] px-2 rounded-full border border-dark-400/50",
					"hover:border-blue-600 hover:cursor-pointer"
				)}
				pageLinkClassName="font-semibold"
				// ---
				previousClassName="flex items-center"
				previousLinkClassName="hover:text-blue-600"
				// ---
				nextClassName="flex items-center"
				nextLinkClassName="hover:text-blue-600"
				// ---
				className="flex gap-4 select-none"
				breakClassName="hidden"
				activeClassName="bg-blue-600"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;
