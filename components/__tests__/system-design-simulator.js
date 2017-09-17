describe('entry', () => {
  // let Entry;
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

  it('renders the App component', () => {
    const renderedRoot = ReactDOM.render.mock.calls[0][0];
    expect(renderedRoot.type.name).toEqual('App');
  });

  it('renders the component into the body', () => {
    const body = ReactDOM.render.mock.calls[0][1];

    expect(body).toEqual(document.body);
  });
});
