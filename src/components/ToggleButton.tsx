import { useState } from 'react';

interface ToggleButtonProps {
	value: string;
	onChange: (value: string, checked: boolean) => void;
	checked?: boolean;
	className: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
	value,
	onChange,
	checked = false,
	className,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleClick = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		onChange(value, newChecked);
	};

	return (
		<button onClick={handleClick} className={className}>
			{value}
		</button>
	);
};

export default ToggleButton;
