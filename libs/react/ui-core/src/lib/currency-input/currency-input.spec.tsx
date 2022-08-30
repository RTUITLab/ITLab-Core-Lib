import { render } from '@testing-library/react';

import CurrencyInput from './currency-input';

describe('CurrencyInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrencyInput id={'id'} />);
    expect(baseElement).toBeTruthy();
  });
});
