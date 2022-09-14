import { render } from '@testing-library/react';
import { Collapse } from './collapse';

describe('Collapse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Collapse items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
