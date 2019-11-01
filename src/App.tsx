import React from 'react';
import Tile from './components/tile/tile';
import Footer from './components/footer/footer';
import styled, {createGlobalStyle} from 'styled-components';
import { images } from './assets/assets';

const Card = styled.div`
  position: relative;
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

export default class App extends React.PureComponent {
  render() {
    return(<Card>
              <GlobalStyle />
              <Tile image = { images.tile }/>
              <Footer text = "Home and Away" />
            </Card>)
  }
}