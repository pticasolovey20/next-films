import ContentLoader from "react-content-loader";

const SkeletonCard = () => {
	return (
		<div className="flex flex-col h-[600px]">
			<ContentLoader speed={3} width="100%" height="100%" backgroundColor="#262529" foregroundColor="#1F1E21">
				<rect x="20" y="500" rx="5" ry="5" width="70%" height="25" />
				<rect x="20" y="535" rx="5" ry="5" width="60%" height="15" />
				<rect x="20" y="560" rx="5" ry="5" width="50" height="15" />
				<rect x="85%" y="560" rx="3" ry="3" width="20" height="15" />
				<rect x="0" y="1" rx="5" ry="5" width="100%" height="80%" />
			</ContentLoader>
		</div>
	);
};

export default SkeletonCard;
