import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";

import styles from "./Navigation.module.scss";

import { classNames } from "@/utils";

const NavigationComponent = () => {
	return (
		<NavigationMenu.Root className="relative flex justify-center z-1">
			<NavigationMenu.List className="h-full flex items-center justify-center m-0 p-2 rounded-md bg-dark-300 shadow-black/75 shadow-md">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="font-semibold text-[15px] flex items-center justify-between gap-1 py-1 px-3">
						Movies
					</NavigationMenu.Trigger>

					<NavigationMenu.Content
						className={classNames(
							"absolute top-0 left-0 w-full duration-250 animate-ease-linear",
							styles.content
						)}
					>
						<ul className={classNames("grid p-4 m-0 gap-x-2.5", styles.one)}>1</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<Separator.Root className="bg-gray-500 separator" data-orientation="vertical" />

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="font-semibold text-[15px] flex items-center justify-between gap-1 py-1 px-3">
						TV Series
					</NavigationMenu.Trigger>

					<NavigationMenu.Content
						className={classNames(
							"absolute top-0 left-0 w-full duration-250 animate-ease-linear",
							styles.content
						)}
					>
						<ul className={classNames("grid p-4 m-0 gap-x-2.5", styles.two)}>2</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<Separator.Root className="bg-gray-500 separator" data-orientation="vertical" />

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="font-semibold text-[15px] flex items-center justify-between gap-1 py-1 px-3">
						Cartoons
					</NavigationMenu.Trigger>

					<NavigationMenu.Content
						className={classNames(
							"absolute top-0 left-0 w-full duration-250 animate-ease-linear",
							styles.content
						)}
					>
						<ul className={classNames("grid p-4 m-0 gap-x-2.5", styles.one)}>3</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator
					className={classNames(
						"top-[100%] h-[10px] flex items-end justify-center overflow-hidden z-1 transition-all duration-250 ease",
						styles.indicator
					)}
				>
					<div className="relative top-[70%] w-[12px] h-[12px] rounded-tl-2 bg-dark-300 transform rotate-45" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="absolute top-[100%] left-0 w-full flex justify-center perspective-2000">
				<NavigationMenu.Viewport
					className={classNames(
						"relative w-full h-[300px] mt-2 rounded-md bg-dark-300 overflow-hidden shadow-black/75 shadow-md",
						"origin-top-center transition-width height duration-300 ease",
						styles.viewport
					)}
				/>
			</div>
		</NavigationMenu.Root>
	);
};

export default NavigationComponent;
