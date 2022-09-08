import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomTool = styled.div`
`;

export default function AverageSessionsChartTool({ active, payload }) {
	if (active) {
		return <CustomTool>{payload[0].value} min</CustomTool>;
	}
	return null;
}

AverageSessionsChartTool.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
