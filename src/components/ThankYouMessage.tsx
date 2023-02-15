const ThankYouMessage = ({ value }: { value: string }) => {
	return (
		<div className='thanks-container'>
			<img src='src/assets/illustration-thank-you.svg' />
			<div className='thanks-confirmation'>You selected {value} out of 5</div>
			<h1 className='card-title'>Thank you!</h1>
			<p className='thanks-description'>
				We appreciate you taking the time to give a rating. If you ever need more
				support, don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default ThankYouMessage;
