import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonComponent = ({ styles }) => {
	return (
		<div className={styles}>
			<ContentLoader speed={3} width="100%" height="100%" backgroundColor="#262529" foregroundColor="#1F1E21">
				<rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
			</ContentLoader>
		</div>
	);
};

export default SkeletonComponent;
