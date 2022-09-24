import { render } from '@testing-library/react';

import { Progress } from './progress';

describe('Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Progress currentStep={2} steps={4} />);
    expect(baseElement).toBeTruthy();
  });
});
