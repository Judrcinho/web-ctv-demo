import React from 'react';
import styled from 'styled-components';
import { images } from '../../assets/assets';

interface IFooterProps {
    text: String
}

const BottomBar: any = styled.div`
    position: absolute;
    bottom: 0px;
    height: 30%;
    width: 100%;
    background-color: #0000007a;
    text-align: center;
`;

const Logo = styled.img`
    display: inline-block;
    height: -webkit-fill-available;
    float: left;
    margin-left: 5%;
`;

const Header = styled.div`
    position: relative;
    top: 35%;
    display: inline-block;
    float: left;
    color: white;
    font-size: 5vw;
    font-family: Montserrat,sans-serif;
    font-weight: 700;
    margin-left: 5%;
`;

export default class Footer extends React.PureComponent<IFooterProps> {
    render() {
        return(
            <BottomBar>
                <Logo src = { images.logo }/>
                <Header>{ this.props.text }</Header>
            </BottomBar>
        )
    }
}