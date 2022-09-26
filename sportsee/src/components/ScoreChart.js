import React from 'react';
import PropTypes from 'prop-types';
import { 
	ResponsiveContainer, 
	PieChart, 
	Pie, 
	Cell } from 'recharts';
import styled from 'styled-components';

/** create a PieChart with score value
* @param  {object} - > {data}
* @return {JSX}
*/

export default function ScoreChart({ data }) {
	const score = [
		{ value: data.todayScore || data.score },
		{ value: 1 - data.todayScore || data.score },
	];

	return (
		<Container>
			<Title>Score</Title>
			<InnerCircle />
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={score}
							dataKey="value"
							innerRadius={73}
							outerRadius={85}
							startAngle={90} >
								{score.map((entry, index) => index === 0 ? (
									<Cell 
										key={`cell-${index}`} 
										cornerRadius={10} 
										fill="#ff0000" />
								  	) : (
									<Cell 
										key={`cell-${entry}`} 
										fill="#FBFBFB" />
								  	)
								)}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<Text>
        			<Score>
          				{score[0].value * 100}%<br />
        			</Score>
        			de votre
        			<br /> objectif
      			</Text>
    	</Container>
	);
}

ScoreChart.propTypes = {
	data: PropTypes.object,
};

const Container = styled.div`
	position: relative;
	height: 263px;
	width: 258px;
	background: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
	h2 {
		position: absolute;
		top: 25px;
		left: 30px;
		font-weight: 500;
		font-size: 15px;
	}
`;

const Title = styled.h2`
	position: absolute;
	left: 20%;
	top: 15%;
	transform: translate(-50%, -50%);
	font-weight: 500;
	font-size: 15px;
	line-height: 24px;
	color: #20253a;
	font-weight: 700;
`;

const Text = styled.p`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
	line-height: 20px;
	font-weight: 700;
	text-align: center;
	color: #74798c;
	background: #FBFBFB;
	border-radius: 50%;
	padding: 2.3rem 2.7rem;
`;

const Score = styled.span`
	color: rgba(0, 0, 0, 0.8);
	font-weight: 700;
	font-size: 26px;
`;

const InnerCircle = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 57%;
	height: 57%;
	border-radius: 50%;
	background-color: white;
`;