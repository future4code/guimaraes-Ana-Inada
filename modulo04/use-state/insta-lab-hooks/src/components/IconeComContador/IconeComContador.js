import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador({ icone, onClickIcone, valorContador }) {
	return <IconeContainer>
		<img alt={'Icone'} src={icone} onClick={onClickIcone}/>
		<p>{valorContador}</p>
	</IconeContainer>
}

export default IconeComContador