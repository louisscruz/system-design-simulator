import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';

describe('<Root />', () => {
  let rootWrapper;

  beforeEach(() => {
    rootWrapper = shallow(<Root />);
  });

  it('renders the router', () => {
    const router = rootWrapper.find('HashRouter');

    expect(router.length).toEqual(1);
  });

  describe('rendered routes', () => {
    let routes;

    beforeAll(() => {
      routes = rootWrapper.find('Route');
    });

    describe('at \'/\'', () => {
      let rootRoute;

      beforeAll(() => {
        rootRoute = routes.filter({ path: '/' });
      });

      it('has a matching route', () => {
        expect(rootRoute.length).toEqual(1);
      });

      it('renders <App />', () => {
        const { component } = rootRoute.props();
        expect(component.name).toEqual('App');
      });

      it('matches exactly', () => {
        expect(rootRoute.props().exact).toBeDefined();
      });
    });

    describe('at \'/about\'', () => {
      let aboutRoute;

      beforeAll(() => {
        aboutRoute = routes.filter({ path: '/about' });
      });

      it('has a matching route', () => {
        expect(aboutRoute).toBeDefined();
      });

      it('renders <App />', () => {
        const { component } = aboutRoute.props();
        expect(component.name).toEqual('About');
      });
    });
  });
});
