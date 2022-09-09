import { render } from '@testing-library/react';

import NoData from './no-data';

describe('NoData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoData />);
    expect(baseElement).toBeTruthy();
  });
});
