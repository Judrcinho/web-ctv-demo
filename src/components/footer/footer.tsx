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
    height: 100%;
    float: left;
    margin-left: 5%;
`;

const Header = styled.svg`
    position: relative;
    top: 60%;
    float: left;
    width: 40%;
    margin-left: 5%;
    overflow: visible;
`;

const Text = styled.text `
    color: white;
    font-family: Montserrat,sans-serif;
    font-weight: 700;
    fill: white;    
`;

export default class Footer extends React.PureComponent<IFooterProps> {
    render() {
        return(
            <BottomBar>
                <Logo src = { images.logo }/>
                <Header viewBox='0 0 100 100'>
                    <Text>{ this.props.text }</Text>
                </Header>
            </BottomBar>
        )
    }
}