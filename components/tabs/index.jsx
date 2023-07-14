import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import { classNames } from "@/utils";

const TabsComponent = ({ triggers, tabs }) => {
	return (
		<Tabs.Root className="flex flex-col" defaultValue="first">
			<Tabs.List className="flex gap-4 justify-between">
				{triggers.map(({ label, value, id }) => (
					<Tabs.Trigger
						key={id}
						className={classNames(
							"flex items-center justify-center py-4 border-b-[7px] border-transparent",
							"text-dark-600 text-sm md:text-[17px] xl:text-xl uppercase",
							"outline-none leading-none select-none",
							"first:rounded-tl-md",
							"last:rounded-tr-md",
							"data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:focus:relative"
						)}
						value={value}
					>
						{label}
					</Tabs.Trigger>
				))}
			</Tabs.List>
			<Separator.Root
				className="relative top-0 mb-6 bg-gray-600 separator"
				style={{ height: "2px" }}
				data-orientation="horizontal"
			/>
			{tabs.map(({ id, content, value }) => (
				<Tabs.Content key={id} value={value}>
					{content}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
};
export default TabsComponent;
