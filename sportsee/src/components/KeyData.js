import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** display nutritional info for the user 
* @param  {string} - > icon
* @param  {string} - > info
* @param  {string} - > text
* @return {JSX}
*/

export default function KeyData({icon,nutData,unit,nutId}) {
    return (  
        <NutritionData>
            <img src={icon} alt="calories icon"/>
            <UserNutritionData>
                <UserData>{nutData}{unit}</UserData>
                <NutCategory>{nutId}</NutCategory>
            </UserNutritionData>
        </NutritionData> 
    );
}

KeyData.propTypes = {
    icon: PropTypes.any,
    info: PropTypes.string,
    text: PropTypes.string,
}

const NutritionData = styled.div`
    display: flex;
    margin-top: 40px;
    margin-left: 600px;
    align-items: flex-end;
    padding: 2em;
    width: 258px;
    height: 124px;
    background: #FBFBFB;
    border-radius: 5px;
    @media (max-width: 1025px) {
        width: 180px;
        height: 80px;
        padding: 1.2rem;
    }
    img {
        @media (max-width: 1025px) {
            width: 50px;
        }
    }
`;

const UserNutritionData = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
    @media (max-width: 1025px) {
        margin-left:15px;
    }
`;

const UserData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
    @media (max-width: 1025px) {
        font-size: 16px;
    }
`;

const NutCategory = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
    @media (max-width: 1025px) {
        font-size: 12px;
    }
`;

