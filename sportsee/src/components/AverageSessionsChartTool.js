import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** create a custom tooltype for the user activity barchart
* @param  {bool} - > active
* @param  {array} - > payload
* @return {JSX}
*/

export default function DashboarAverageActivityChartTool({ active, payload }) {
	if (active) {
		return <CustomTool>{payload[0].value} min</CustomTool>;
	}
	return null;
}

DashboarAverageActivityChartTool.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

const CustomTool = styled.div`
    font-weight: 500;
    font-size: 10px;
    color: black;
    background-color: white;
    padding: 4px 7px;
`;