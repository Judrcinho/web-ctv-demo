import React from 'react';
import Card from './components/card/card';
import  styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const Container = styled.div`
  text-align: center;
`;

export default class App extends React.PureComponent {
  render() {
    return(<Container>
              <GlobalStyle />
              <Card />
            </Container>)
  }
}