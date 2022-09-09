import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display : block
`;

const IconContainer = styled.div`
	display : block
`;

const TextContainer = styled.div`
	display : block
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
