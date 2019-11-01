import React from 'react';
import styled from 'styled-components';

interface ITileProps {
    image: string;
}

const StyledTile: any = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
`

export default class Tile extends React.PureComponent<ITileProps>{  
    render() {
        return(
            <StyledTile src = { this.props.image }/> 
        )
    }
}