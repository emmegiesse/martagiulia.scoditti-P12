import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
`;

const IconContainer = styled.div`
`;

const TextContainer = styled.div`
`;

export default function KeyInfos({ data, unit, image, color, alt, text }) {
	return (
		<Container>
			<IconContainer color={color}>
				<img src={image} alt={alt} />
			</IconContainer>
			<TextContainer>
				<h3>
					{data}
					{unit}
				</h3>
				<p>{text}</p>
			</TextContainer>
		</Container>
	);
}

KeyInfos.propTypes = {
	data: PropTypes.number.isRequired,
	unit: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	alt: PropTypes.string,
	text: PropTypes.string.isRequired,
};
