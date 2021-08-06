import styled from 'styled-components';

export const StyledApp = styled.div`
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.body};
	border-radius: 5px;
`;

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const StyledDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledWeights = styled.div`
	display: flex;
	justify-content: center;
`;

export const StyledScroll = styled.div`
	margin: 5px;
	padding: 4px;
	width: 130px;
	height: 110px;
	overflow-x: hidden;
	overflow-y: auto;
	text-align: center;
	font-size: 12px;
	background-color: ${props => props.theme.backgroundColor};
	border-radius: 5px;
`;

export const StyledThemeButton = styled.button``;
