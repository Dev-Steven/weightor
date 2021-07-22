import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';
import weightLogo from './assets/weight.png';

const weights = [2.5, 5, 10, 25, 35, 45];

export const App: React.FC<{ initial?: number; currentWeight?: number[] }> = ({
	initial = 45,
	currentWeight = [],
}) => {
	const [totalWeight, setTotalWeight] = useState(initial);
	const [weightsUsed, setWeightsUsed] = useState(currentWeight);

	const addWeight = (weight: number) => {
		setTotalWeight(totalWeight + weight * 2);
		setWeightsUsed(weightsUsed => [...weightsUsed, weight]);
	};

	const clearWeight = (weight: number) => {
		setTotalWeight(weight);
		setWeightsUsed([]);
	};
	return (
		<div className='App'>
			<h1 className='title'>
				Weightor
				<img src={weightLogo} height='50' alt='weights' />
			</h1>
			<div className='content'>
				<div className='weight-info'>
					<input type='text' value={totalWeight} readOnly />
					{/* <textarea name='' id='' cols={10} rows={10}></textarea> */}
					<div className='scroll'>
						{weightsUsed.map((w, index) => (
							<p key={index}>{w}</p>
						))}
					</div>
					<br />
					<Button
						title='Clear'
						changeWeight={() => clearWeight(45)}
					/>
				</div>
				<div className='weight-options'>
					{weights.map((w, index) => (
						<Button
							key={index}
							title={w}
							changeWeight={() => addWeight(w)}
						/>
					))}
				</div>
				<br />
			</div>
		</div>
	);
};

export default App;
