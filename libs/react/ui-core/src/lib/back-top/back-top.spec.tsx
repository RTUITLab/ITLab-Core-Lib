import { render } from '@testing-library/react';

import BackTop from './back-top';

describe('BackTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackTop />);
    expect(baseElement).toBeTruthy();
  });
});
