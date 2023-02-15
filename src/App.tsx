import './App.css';
import { useState } from 'react';
import Rating from './components/Rating';
import ThankYouMessage from './components/ThankYouMessage';

function App() {
	const [showThanks, setShowThanks] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const handleSubmit = () => {
		if (selectedValue === '') return;
		setShowThanks(true);
	};

	return (
		<main>
			<div className='card-container'>
				{showThanks ? (
					<ThankYouMessage value={selectedValue} />
				) : (
					<>
						<img src='src/assets/icon-star.svg' className='icon' />
						<h1 className='card-title'> How did we do?</h1>
						<p className='card-description'>
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
						<Rating
							selectedValue={selectedValue}
							setSelectedValue={setSelectedValue}
						/>
						<button className='btn-submit' onClick={handleSubmit}>
							SUBMIT
						</button>
					</>
				)}
			</div>
		</main>
	);
}

export default App;
