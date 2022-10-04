import { render } from '@testing-library/react';

import { List } from './list';

describe('List', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<List items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
