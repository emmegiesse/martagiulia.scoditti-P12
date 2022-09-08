import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { getUserInfos } from '../services/APICall';
import PerformanceChart from './PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart';
import ScoreChart from './ScoreChart';
import ActivityChart from './ActivityChart';
import KeyInfos from './KeyInfos';

const Container = styled.main`
`;

const Header = styled.header`
`;

const ChartsContainer = styled.div`
`;

const SmallChartsContainer = styled.div`
`;

export default function Dashboard({ match }) {
	const [data, setData] = useState([]);
	const [score, setScore] = useState([]);

	const { userInfos, keyData } = data;
	const id = match.params.id;

	useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(id);
			if (!request) return <Redirect to='/404' />;

			setData(request.data);
			setScore([
				{ score: request.data.todayScore || request.data.score },
				{
					score:
						1 - request.data.todayScore || 1 - request.data.score,
				},
			]);
		};
		getData();
	}, [id]);

	if (data.length === 0) return null;

	return (
		<Container>
			<Header>
				<h1>
					Bonjour <span>{userInfos.firstName}</span>
				</h1>
				<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			</Header>
			<ChartsContainer>
				<div>
					<ActivityChart id={id} />
					<SmallChartsContainer>
						<AverageSessionsChart id={id} />
						<PerformanceChart id={id} />
						<ScoreChart id={id} score={score} />
					</SmallChartsContainer>
				</div>
				<aside>
					<KeyInfos
						data={keyData.calorieCount}
						unit='kCal'
						image={"/assets/iconCalories.svg"}
						color='rgba(255, 0, 0, 0.1)'
						text='Calories'
					/>
					<KeyInfos
						data={keyData.proteinCount}
						unit='g'
						image={"/assets/iconProteins.svg"}
						color='rgba(74, 184, 255, 0.1)'
						text='Proteines'
					/>
					<KeyInfos
						data={keyData.carbohydrateCount}
						unit='g'
						image={"/assets/iconCarbs.svg"}
						color='rgba(249, 206, 35, 0.1)'
						text='Glucides'
					/>
					<KeyInfos
						data={keyData.lipidCount}
						unit='g'
						image={"/assets/iconLipids.svg"}
						color='rgba(253, 81, 129, 0.1)'
						text='Lipides'
					/>
				</aside>
			</ChartsContainer>
		</Container>
	);
}

Dashboard.propTypes = {
	match: PropTypes.object.isRequired,
};
