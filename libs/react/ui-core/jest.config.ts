/* eslint-disable */
export default {
  displayName: 'react-ui-core',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    //Based on https://github.com/react-custom-projects/webpack-react-boilerplate/blob/master/jest/jest.config.js
    '\\.(js|jsx|mjs|cjs|ts|tsx|css|json|svg)': '<rootDir>/fileTransform.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  coverageDirectory: '../../../coverage/libs/react/ui-core',
};
