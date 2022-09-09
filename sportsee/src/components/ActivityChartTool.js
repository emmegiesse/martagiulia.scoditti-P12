import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomTool = styled.div`
	display : block
`;

export default function ActivityChartTool({ active, payload }) {
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

ActivityChartTool.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
