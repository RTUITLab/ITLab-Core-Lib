import { render } from '@testing-library/react';

import ReactUiCore from './react-ui-core';

describe('ReactUiCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiCore />);
    expect(baseElement).toBeTruthy();
  });
});
