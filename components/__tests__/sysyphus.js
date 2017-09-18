describe('entry', () => {
  let ReactDOM;

  beforeAll(() => {
    document.addEventListener = jest.fn();
    document.write = jest.fn();

    ReactDOM = require('react-dom');
    ReactDOM.render = jest.fn();

    require('../../system-design-simulator.jsx');

    document.addEventListener.mock.calls[0][1]();
  });

  it('sets a listener for DOMContentLoaded', () => {
    const { calls } = document.addEventListener.mock;

    expect(document.addEventListener).toBeCalled();
    expect(calls[0][0]).toEqual('DOMContentLoaded');
  });

  it('renders <Root />', () => {
    const renderedRoot = ReactDOM.render.mock.calls[0][0];
    expect(renderedRoot.type.name).toEqual('Root');
  });

  it('renders the component into the root div', () => {
    const body = ReactDOM.render.mock.calls[0][1];
    const root = document.getElementById('root');

    expect(body).toEqual(root);
  });
});
