import { Dispatch, SetStateAction } from 'react';
import ToggleButton from './ToggleButton';

const Rating = ({
	selectedValue,
	setSelectedValue,
}: {
	selectedValue: string;
	setSelectedValue: Dispatch<SetStateAction<string>>;
}) => {
	const handleToggle = (value: string, checked: boolean) => {
		if (checked) {
			setSelectedValue(value);
		} else {
			setSelectedValue('');
		}
	};

	return (
		<div className='ratings'>
			<ToggleButton
				className={`circle-rating ${selectedValue === '1' ? 'active' : ''}`}
				value='1'
				checked={selectedValue === '1'}
				onChange={handleToggle}
			/>
			<ToggleButton
				className={`circle-rating ${selectedValue === '2' ? 'active' : ''}`}
				value='2'
				checked={selectedValue === '2'}
				onChange={handleToggle}
			/>
			<ToggleButton
				className={`circle-rating ${selectedValue === '3' ? 'active' : ''}`}
				value='3'
				checked={selectedValue === '3'}
				onChange={handleToggle}
			/>
			<ToggleButton
				className={`circle-rating ${selectedValue === '4' ? 'active' : ''}`}
				value='4'
				checked={selectedValue === '4'}
				onChange={handleToggle}
			/>
			<ToggleButton
				className={`circle-rating ${selectedValue === '5' ? 'active' : ''}`}
				value='5'
				checked={selectedValue === '5'}
				onChange={handleToggle}
			/>
		</div>
	);
};

export default Rating;
