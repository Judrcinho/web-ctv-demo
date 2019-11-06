import React from 'react';
import Tile from '../tile/tile';
import styled from 'styled-components';
import Footer from '../footer/footer';
import { images } from '../../assets/assets';

const CardStyled = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  max-width: 720px;
`;

export default class Card extends React.PureComponent {
    render() {
        return(<CardStyled>
                  <Tile image = { images.tile }/>
                  <Footer text = "Home and Away" />
                </CardStyled>)
      }

}