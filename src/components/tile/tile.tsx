import React from 'react';
import styled from 'styled-components';
import { any } from 'prop-types';

interface ITileProps {
    image: string;
}

const StyledTile: any = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
    max-width: 720px;
`

/*const StyledTile: any = styled.div`
        width: 100%;
        height: 100%;
        max-height: 100%;
        margin: 0;
        padding: 0;
        background-image: url('${(props: any) => props.imgUrl}');
        background-size:100% 100%;
        background-repeat: no-repeat;
        background-size: cover;
`*/

export default class Tile extends React.PureComponent<ITileProps>{  
    render() {
        return(
            <StyledTile src = { this.props.image } /> 
        )
    }
}