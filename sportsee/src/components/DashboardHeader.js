import PropTypes from "prop-types";
import styled from 'styled-components';

/** Create the dashboard header with welcome message
* @param {string} - > firstName
*/

function DashboardHeader({ firstName }) {
    return (
        <UserDashboardHeader >
            <h1 >Bonjour <span>{firstName}</span></h1>
            <p >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </UserDashboardHeader>
    );
}
    
DashboardHeader.propTypes = {
    firstName: PropTypes.string.isRequired,
};
export default DashboardHeader;
    
const UserDashboardHeader = styled.header`
    margin: 40px 0 25px 200px;    
    h1 {
        font-weight: 500;
        font-size: 48px;
        padding-bottom: 25px;
        span {
            color: #ff0000;
        }
    }
    p {
        font-size: 15px;
        font-weight: 200;
    }
`;
