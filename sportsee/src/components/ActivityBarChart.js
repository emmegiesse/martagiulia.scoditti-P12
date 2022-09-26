import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
    ResponsiveContainer,
    BarChart,
    Tooltip,
    XAxis, YAxis,
    Bar,CartesianGrid } from 'recharts';
import styled from 'styled-components';

import { getUserActivity } from '../services/APICall';
import ActivityBarChartTooltip from './ActivityBarChartTooltip';

/**
* Render a BarChart based on the user activity Data from API
* @return {JSX}
*/

export default function ActivityBarChart({ id }) {
	const [activity, setActivity] = useState(); 

    useEffect(() => {
        async function APICall() {
            const activityData = await getUserActivity(id);
			setActivity(activityData.sessions);
		};
		APICall();
	}, [id]);

    return (
		<BarChartContainer>
            <BarChartHeader>
				<h2>Activité quotidienne</h2>
				<Legend>
					<div className="units">
						<Dot color='#282D30' />
						<Text>Poids (kg)</Text>
					</div>
					<div className="units">
						<Dot color='#E60000' />
						<Text>Calories brûlées (kCal)</Text>
					</div>
				</Legend>
			</BarChartHeader>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					margin={{ top: 50 }}
					data={activity}
					barGap={8}
					barCategoryGap={1} >
						<CartesianGrid 
							vertical={false} 
							strokeDasharray="2 2" />
						<Tooltip content={<ActivityBarChartTooltip />} />
						<XAxis 
							dataKey="day" 
							axisLine={false} 
							tickLine={false}
							tick={{fontSize: 14}}
							dy={5} />
						<YAxis
							datakey="kilogram"
							yAxisId="kg"
							type="number"
							domain={["dataMin - 2", "dataMax + 1"]} 
							tickCount={4}
							axisLine={false}
							tickLine={false}
							orientation="right"
							tick={{fontSize: 14}} 
							dx={15}/>
						<YAxis
							yAxisId="cal"
							datakey="calories"
							type="number" 
							domain={['dataMin - 20', 'dataMax + 10']} 
							hide={true} />
						<Bar
							yAxisId="kg"
							dataKey="kilogram"
							fill='#282D30'
							barSize={7}
							radius={[50, 50, 0, 0]} />
						<Bar
							yAxisId="cal"
							dataKey="calories"
							fill='#E60000'
							barSize={7}
							radius={[50, 50, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
        </BarChartContainer>
	);
}

ActivityBarChart.propTypes = {
	id: PropTypes.string.isRequired,
};

const BarChartContainer = styled.div`
	margin-bottom: 25px;
	height: 320px;
	border-radius: 5px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;
`;

const BarChartHeader = styled.header`
	display: flex;
	justify-content: space-between;
	h2 {
		font-weight: 500;
		font-size: 15px;
		color: #20253a;
	}
`;

const Legend = styled.div`
	display: flex;
	.units {
		display: flex;
	}
`;

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`;

const Dot = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`;



