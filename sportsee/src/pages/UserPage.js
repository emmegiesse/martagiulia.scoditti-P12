import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconBar from '../components/IconBar';
import Dashboard from '../components/Dashboard';

const Container = styled.div`
`;
export default function UserPage() {
	let {id} = useParams (); 
	const [user, setUser] = React.useState (null); 

	/*React.useEffect (() => {
		if (!id) {
			// setUser used id:12
		} else {
			// setUser used id
		}
	}, [id]);*/
		
	return (
		<div>
			<IconBar />
			<Dashboard id={id} />
		</div>
	);
}
