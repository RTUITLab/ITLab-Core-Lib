import { render } from '@testing-library/react';

import {FunctionalButton} from './functional-button';

describe('FunctionalButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FunctionalButton children={'Hello'} />);
    expect(baseElement).toBeTruthy();
  });
});
