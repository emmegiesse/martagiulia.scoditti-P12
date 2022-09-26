import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    ResponsiveContainer, 
    LineChart, 
    XAxis, 
    Tooltip, 
    Line, 
    YAxis } from 'recharts';
import styled from 'styled-components';

import { getUserAverageSessions } from '../services/APICall';
import AverageActivityLineChartTooltip from "./AverageSessionsChartTool";

/**
* Render a BarChart with user activity Data
* @return {JSX}
*/

export default function AverageActivityLineChart({ id }) {
	const [averageSession, setAverageSession] = useState(); //state data

    useEffect(() => {
        async function APICall() {
            const averageSessionData = await getUserAverageSessions(id);
            const formatedData = averageSessionData.sessions.map((session) => {
                switch (session.day) {
					case 1:
						return { ...session, day: 'L' };
					case 2:
						return { ...session, day: 'M' };
					case 3:
						return { ...session, day: 'M' };
					case 4:
						return { ...session, day: 'J' };
					case 5:
						return { ...session, day: 'V' };
					case 6:
						return { ...session, day: 'S' };
					case 7:
						return { ...session, day: 'D' };
					default:
						return { ...session };
				}
			});
            setAverageSession(formatedData);
            //console.log (formatedData)
		};
		APICall();
	}, [id]);

    return (
		<LineChartContainer>
			<LineChartTitle>Durée moyenne des sessions</LineChartTitle>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart 
                    data={averageSession}
                    strokeWidth={1} >
					<XAxis
						type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="red"
                        padding={{right:5, left:5}}
                        tick={{ fontSize: 13, stroke: "white", opacity: 0.8}} />
					<YAxis 
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true} />
					<Line
						dataKey="sessionLength"
						type="monotone"
						stroke="rgba(255, 255, 255, 0.7)"
						strokeWidth={2}
						dot={false}
						activeDot={{
							stroke: 'rgba(255, 255, 255, 0.5)',
							strokeWidth: 10,
							r: 5,
						}}
					/>
					<Tooltip
						content={<AverageActivityLineChartTooltip />}
						cursor={{
							stroke: "rgba(0, 0, 0, 0.1)",
							strokeWidth: 50,
							height: "1000px",
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</LineChartContainer>
	);
}

AverageActivityLineChart.propTypes = {
	id: PropTypes.string.isRequired,
};

const LineChartContainer = styled.div`
    position: relative;
    width: 258px;
    height: 263px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ff0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`;

const LineChartTitle = styled.h2`
    position: absolute;
    font-weight: 500;
    font-size: 15px;
    padding: 29px 34px 0 34px;
    color: rgba(255, 255, 255, 0.7);
`;



