import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';

describe('<NavBar />', () => {
  let navBarWrapper;

  beforeAll(() => {
    navBarWrapper = shallow(<NavBar />);
  });

  it('renders the application name', () => {
    const text = navBarWrapper.text();
    expect(text).toContain('Sysyphus');
  });
});
