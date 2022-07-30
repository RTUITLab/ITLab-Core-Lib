import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement.innerHTML).toContain("class=\"container\"")
    expect(baseElement).toBeTruthy();
  });
});
