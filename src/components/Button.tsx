import React from 'react';

interface Props {
	title: number | string;
	changeWeight: () => void;
}

export const Button: React.FC<Props> = ({ title, changeWeight }) => {
	return <button onClick={changeWeight}>{title}</button>;
};

export default Button;
