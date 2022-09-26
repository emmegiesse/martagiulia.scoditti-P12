import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** create a custom tooltype for the user activity barchart
* @param  {bool} active
* @param  {array} payload
* @return {JSX}
*/

export default function ActivityBarChartTooltip({ active, payload }) {
	if (active) {
		return (
			<CustomTool>
				<p>{payload[0].value}kg</p>
				<p>{payload[1].value}kCal</p>
			</CustomTool>
		);
	}
	return null;
}

ActivityBarChartTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

const CustomTool = styled.div`
	height: 72px;
	width: 49px;
	background-color: #e60000;
	font-weight: 500;
	font-size: 10px;
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 10px 0;
	align-items: center;
`;
