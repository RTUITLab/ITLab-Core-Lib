import { render } from '@testing-library/react';

import {Radio} from './radio';

describe('Radio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Radio value={'value'} onChange={() => {console.log('change')}} checked={false} />);
    expect(baseElement).toBeTruthy();
  });
});
