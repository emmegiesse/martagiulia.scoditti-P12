import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getUserInfos } from '../services/APICall';
import PerformanceChart from './PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart';
import ScoreChart from './ScoreChart';
import ActivityChart from './ActivityChart';
import KeyInfos from './KeyInfos';

const Container = styled.main`
	display : block
`;

const Header = styled.header`
	display : block
`;

const ChartsContainer = styled.div`
	display : block
`;

const SmallChartsContainer = styled.div`
	display : block
`;

export default function Dashboard({ id }) {
	const [data, setData] = useState({});
	const [score, setScore] = useState({});

	/*const { userInfos, keyData } = data;*/

	useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(id);
			/*if (!request) return <Redirect to='/404' />;*/

			setData(request);
			setScore([
				{ score: request.todayScore || request.score },
				{
					score:
						1 - request.todayScore || 1 - request.score,
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
					Bonjour <span>{data.userInfos.firstName}</span>
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
						data={data.keyData.calorieCount}
						unit='kCal'
						image={"/assets/iconCalories.svg"}
						color='rgba(255, 0, 0, 0.1)'
						text='Calories'
					/>
					<KeyInfos
						data={data.keyData.proteinCount}
						unit='g'
						image={"/assets/iconProteins.svg"}
						color='rgba(74, 184, 255, 0.1)'
						text='Proteines'
					/>
					<KeyInfos
						data={data.keyData.carbohydrateCount}
						unit='g'
						image={"/assets/iconCarbs.svg"}
						color='rgba(249, 206, 35, 0.1)'
						text='Glucides'
					/>
					<KeyInfos
						data={data.keyData.lipidCount}
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
	id: PropTypes.object,
};
