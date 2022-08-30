import { render } from '@testing-library/react';

import {InputNumber} from './input-number';

describe('InputNumber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputNumber id={'id'} />);
    expect(baseElement).toBeTruthy();
  });
});
