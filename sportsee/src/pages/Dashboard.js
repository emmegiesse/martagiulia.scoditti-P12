import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getUserInfos } from '../services/APICall';

import DashboardHeader from "../components/DashboardHeader";
import ActivityBarChart from "../components/ActivityBarChart";
import AverageActivityLineChart from "../components/AverageActivityLineChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from  "../components/KeyData";

export default function Dashboard() {
    const {userId} = useParams(); 
    const [mainData, setMainData] = useState(); 
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function APICall() {
            try {
                const mainData = await getUserInfos(userId);
                setMainData(mainData);
                setIsLoaded(true);
            } catch (error) {
                navigate("/404")
            }
		};
		APICall();
	}, [userId, isLoaded]);

    if (isLoaded) {
    return (
        <Main>
            <Container>
                <DashboardHeader firstName={mainData.userInfos.firstName} />
                <Content>
                    <section className="chartsContainer">
                        <ActivityBarChart id={userId}/>
                        <SmallChartsContainer>
                            <AverageActivityLineChart id={userId}/>
                            <PerformanceChart id={userId}/>
                            <ScoreChart data={mainData} />
                        </SmallChartsContainer>
                    </section>
                    <aside className="dashboardNutritionSection">
					    <KeyData
              			    icon={"/assets/iconCalories.svg"}
                            nutData={mainData.keyData.calorieCount}
                            unit={"kcal"}
                            nutId={"Calories"}/>
            		    <KeyData
                            icon={"/assets/iconProteins.svg"}
                            nutData={mainData.keyData.proteinCount}
              			    unit={"g"}
              			    nutId={"Proteines"}/>
            		    <KeyData
                            icon={"/assets/iconCarbs.svg"}
                            nutData={mainData.keyData.carbohydrateCount}
              			    unit={"g"}
              			    nutId={"Glucides"}/>
            		    <KeyData
                            icon={"/assets/iconLipids.svg"}
                            nutData={mainData.keyData.lipidCount}
              			    unit={"g"}
              			    nutId={"Lipides"}/>
				    </aside>
                </Content>
            </Container>
        </Main>
    )} else {
        return (
	        <main>
	            <Loader></Loader>
	        </main>
        );
    };
};

const Main = styled.main`
    margin-top: 0px;
`;

const Loader = styled.div`
`;

const Container = styled.div`
    max-width: 1240px;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 200px;
    @media (max-width: 1025px) {
        margin-left: 130px;
        justify-content: flex-start;
    }
    aside {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 835px;
        flex-direction: column;
        height: 670px;
        margin: auto;
        margin-left: 2rem;
        @media (max-width: 1025px) {
            display: flex;
            margin-left: 10px;
            height: auto;
        }
        > div {
            margin: 20px 5px;
        }
    }
`;

const SmallChartsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
    justify-content: space-between;
    @media (max-width: 1025px) {
        grid-gap: 1.2em;
    }
`;


