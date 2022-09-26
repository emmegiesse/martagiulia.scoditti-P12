import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
    RadarChart,
    PolarGrid,
    Radar,
    PolarAngleAxis,
    ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
    
import { getUserPerformance } from '../services/APICall.js';
    
/**
* Render a RadarChart with user performance data
* @return {JSX}
*/
    
export default function PerformanceChart({ id }) {
    const [performance, setPerformance] = useState() //state data
        
    useEffect(() => {
        async function APICall() {
            const performanceData = await getUserPerformance(id);
            const formatedData = performanceData.data.map((data) => {
                switch (data.kind) {
                    case 1:
                    return { ...data, kind: 'Cardio' };
                    case 2:
                    return { ...data, kind: 'Energie' };
                    case 3:
                    return { ...data, kind: 'Endurance' };
                    case 4:
                    return { ...data, kind: 'Force' };
                    case 5:
                    return { ...data, kind: 'Vitesse' };
                    case 6:
                    return { ...data, kind: 'Intensité' };
                    default:
                    return {...data };
                }
            });
            setPerformance(formatedData);
            console.log (formatedData)
        };
        APICall();
    }, [id]);
        
    return (
        <Container>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart 
                        cx='50%' 
                        cy='50%' 
                        outerRadius='60%' 
                        data={performance}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey='kind'
                        stroke='white'
                        tickLine={false}
                        tick={{ fontSize: 11 }} />
                    <Radar
                        dataKey='value'
                        stroke='#FF0101'
                        fill='#FF0101'
                        fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </Container>
    );
}

PerformanceChart.propTypes = {
    id: PropTypes.string.isRequired,
};


const Container = styled.div`
	height: 263px;
	width: 258px;
	background: #282d30;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`;
