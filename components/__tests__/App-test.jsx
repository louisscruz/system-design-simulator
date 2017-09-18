import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('renders a <NavBar />', () => {
    const navBar = appWrapper.find('NavBar');
    expect(navBar).toBeDefined();
  });
});
