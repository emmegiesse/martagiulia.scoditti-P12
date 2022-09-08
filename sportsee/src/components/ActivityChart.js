import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer,BarChart,Tooltip,XAxis,YAxis,Bar,CartesianGrid } from 'recharts';
import styled from 'styled-components';

import { getUserActivity } from '../services/APICall';
import ActivityChartTool from './ActivityChartTool';

const Chart = styled.div`
`;

const Header = styled.header`
`;

const Text = styled.p`
`;

const Dot = styled.div`
`;

const Legend = styled.div`
`;

export default function ActivityChart({ id }) {
	const [data, setData] = useState([]);

    useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity(id);
                for (
				    let i = 0, length = request.data.sessions.length;
				    i < length;
				    i++
			    ) {
				    request.data.sessions[i] = {
					    ...request.data.sessions[i],
					    day: i + 1,
				    };
			    }
			setData(request.data.sessions);
        };
		getData();
	}, [id]);

    const kgArray = data.map((el) => el.kilogram);
	const minYKg = Math.min(...kgArray) - 1;
	const maxYKg = Math.max(...kgArray) + 1;

	const calArray = data.map((el) => el.calories);
	const minYCal = Math.min(...calArray) - 20;
	const maxYCal = Math.max(...calArray) + 20;

    return (
		<Chart>
            <Header>
				<h2>Activité quotidienne</h2>
				<Legend>
					<div className='units'>
						<Dot color='#282D30' />
						<Text>Poids (kg)</Text>
					</div>
					<div className='units'>
						<Dot color='#E60000' />
						<Text>Calories brûlées (kCal)</Text>
					</div>
				</Legend>
			</Header>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					margin={{
						top: 50,
					}}
					data={data}
					barGap={8}
					barCategoryGap={1}
				>
					<CartesianGrid vertical={false} strokeDasharray='2 2' />
					<Tooltip content={<ActivityChartTool />} />
					<XAxis dataKey='day' axisLine={false} tickLine={false} />
					<YAxis
						yAxisId='kg'
						datakey='kilogram'
						orientation='right'
						domain={[minYKg, maxYKg]}
						tickCount={4}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						yAxisId='cal'
						datakey='calories'
						hide={true}
						domain={[minYCal, maxYCal]}
					/>
					<Bar
						yAxisId='kg'
						dataKey='kilogram'
						fill='#282D30'
						barSize={7}
						radius={[50, 50, 0, 0]}
					/>
					<Bar
						yAxisId='cal'
						dataKey='calories'
						fill='#E60000'
						barSize={7}
						radius={[50, 50, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
        </Chart>
	);
}

ActivityChart.propTypes = {
	id: PropTypes.string.isRequired,
};