export const simpleSystem = {
  clientNode: {
    count: 1000,
    averageRequestsPerMinute: 2,
  },
  verticals: {
    0: [
      {
        name: 'Proxy Layer',
      }, {
        name: 'Application Layer',
      }, {
        name: 'Database Layer',
      },
    ],
  },
};

export const twoVerticalSystem = {
  clientNode: {
    count: 1000,
    averageRequestsPerMinute: 2,
  },
  verticals: {
    0: [
      {
        name: 'Proxy Layer',
      }, {
        name: 'Application Layer',
      }, {
        name: 'Database Layer',
      },
    ],
    1: [
      {
        name: 'Proxy Layer',
      }, {
        name: 'Application Layer',
      }, {
        name: 'Database Layer',
      },
    ],
  },
};
