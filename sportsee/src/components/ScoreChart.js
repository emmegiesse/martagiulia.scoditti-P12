import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
`;

const Objective = styled.p`
`;

const InnerCircle = styled.div`
`;

export default function ScoreChart({ score }) {
	if (score.length === 0) {
		return null;
	}

	return (
		<Container>
			<h2>Score</h2>
			<InnerCircle />
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						data={score}
						dataKey='score'
						innerRadius={73}
						outerRadius={85}
						startAngle={90}
					>
						{score.map((entry, index) => {
							if (index === 0) {
								return (
									<Cell
										key={`cell-${index}`}
										fill='#FF0000'
										cornerRadius={10}
									/>
								);
							}
							return (
								<Cell
									key={`cell-${index}`}
									stroke='transparent'
									fill='transparent'
								/>
							);
						})}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<Objective>
				<span>{score[0].score * 100}%</span> <br /> de votre <br />
				objectif
			</Objective>
		</Container>
	);
}

ScoreChart.propTypes = {
	score: PropTypes.array.isRequired,
};
