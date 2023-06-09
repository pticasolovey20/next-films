import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxComponent = ({ option }) => {
	return (
		<div className="flex items-center gap-2">
			<Checkbox.Root
				className="w-6 h-6 flex items-center justify-center border-2 border-dark-400 rounded-md"
				id="c1"
			>
				<Checkbox.Indicator>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className="text-[15px]" htmlFor="c1">
				{option}
			</label>
		</div>
	);
};

export default CheckboxComponent;
