import { render } from '@testing-library/react';

import { Notifications } from './notifications';

describe('Notification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Notifications />);
    expect(baseElement).toBeTruthy();
  });
});
