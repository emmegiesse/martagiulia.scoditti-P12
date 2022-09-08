import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconBar from '../components/IconBar';
import Dashboard from '../components/Dashboard';

const Container = styled.div`
`;

export default function UserPage({ match }) {
	return (
		<Container>
			<IconBar />
			<Dashboard match={match} />
		</Container>
	);
}

UserPage.protTypes = {
	match: PropTypes.array.isRequired,
};
