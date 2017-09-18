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

  describe('routes', () => {
    let routes;

    beforeAll(() => {
      routes = appWrapper.find('Route');
    });

    describe('\'/\'', () => {
      let rootRoute;

      beforeAll(() => {
        rootRoute = routes.filter({ path: '/' });
      });

      it('is defined', () => {
        expect(rootRoute.length).toEqual(1);
      });

      it('renders <SystemDesigner />', () => {
        const { component } = rootRoute.props();
        expect(component.name).toEqual('SystemDesigner');
      });
    });
  });
});
