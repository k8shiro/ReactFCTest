import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App  from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import * as React from 'react';

test('Test App.js 001', () => {
  jest.spyOn(React, 'useCallback').mockImplementation(() => {});

  const app = shallow(<App />);
  expect(app.text()).toBe('Hello React');

  jest.resetAllMocks()
});


test('Test App.js 002', () => {
  jest.spyOn(React, 'useCallback').mockImplementation(() => {});
  jest.spyOn(React, 'useState').mockImplementation(() => [99, jest.fn()]);

  let app
  act(() => {
    app = shallow(<App />);
  });

  expect(app.text()).toBe('Hello React');
  jest.resetAllMocks()
});
