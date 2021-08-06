import React, { useState } from 'react';
import Button from './components/Button';
import weightLogo from './assets/weight.png';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import { ThemeProvider } from 'styled-components';
import {
	StyledApp,
	StyledHeader,
	StyledDisplay,
	StyledWeights,
	StyledScroll,
} from './style/StyledApp.Style';
import { lightTheme, darkTheme } from './themes';

const weights = [2.5, 5, 10, 25, 35, 45];

export const App: React.FC<{
	initial?: number;
	currentWeight?: number[];
	currentTheme?: string;
}> = ({ initial = 45, currentWeight = [], currentTheme = 'light' }) => {
	const [totalWeight, setTotalWeight] = useState(initial);
	const [weightsUsed, setWeightsUsed] = useState(currentWeight);
	const [theme, setTheme] = useState(currentTheme);

	const addWeight = (weight: number) => {
		setTotalWeight(totalWeight + weight * 2);
		setWeightsUsed(weightsUsed => [...weightsUsed, weight]);
	};

	const clearWeight = (weight: number) => {
		setTotalWeight(weight);
		setWeightsUsed([]);
	};

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<StyledApp>
				<StyledHeader>
					<h1>Weightor</h1>
					<img src={weightLogo} height='50' alt='weights' />
					<button
						className='theme-toggle'
						onClick={() => themeToggler()}
					>
						{theme === 'light' ? (
							<img src={moon} alt='moon' height='16' />
						) : (
							<img src={sun} alt='sun' height='16' />
						)}
					</button>
				</StyledHeader>
				<StyledDisplay>
					<StyledScroll>
						Total: {totalWeight}
						{weightsUsed.map((w, index) => (
							<p key={index}>{w}</p>
						))}
					</StyledScroll>
				</StyledDisplay>
				<StyledWeights>
					{weights.map((w, index) => (
						<Button
							key={index}
							title={w}
							changeWeight={() => addWeight(w)}
						/>
					))}
				</StyledWeights>
				<StyledWeights>
					<Button
						title='Clear'
						changeWeight={() => clearWeight(45)}
					/>
				</StyledWeights>
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;
