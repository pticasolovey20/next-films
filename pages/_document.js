import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
