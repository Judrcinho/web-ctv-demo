import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/footer';
import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// globally defined container var
let container:any  = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  // clean up on exit
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  // empty
});

it('subcomponent footer text rendered - default', () => {
  expect(container.textContent).toBe("Home and Away");
});


it('subcomponent footer text rendered - override variable', () => {
  act(() => {
    render(<Footer text="Channel 7" />, container);
  });
  expect(container.textContent).toBe("Channel 7");
});



