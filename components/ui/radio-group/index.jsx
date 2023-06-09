import * as RadioGroup from "@radix-ui/react-radio-group";
import { genres } from "@/constants";

import CheckboxComponent from "../checkbox";

const RadioGroupComponent = () => (
	<RadioGroup.Root
		className="h-[250px] flex flex-col gap-2 overflow-y-scroll"
		defaultValue="default"
		aria-label="View density"
	>
		{genres.map(({ id, option }) => (
			<div key={id} className="flex items-center">
				<CheckboxComponent option={option} />
			</div>
		))}
	</RadioGroup.Root>
);

export default RadioGroupComponent;
