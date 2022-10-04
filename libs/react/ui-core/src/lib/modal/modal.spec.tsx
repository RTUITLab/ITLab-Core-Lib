import { render } from '@testing-library/react';

import { Modal } from './modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Modal visible={true} title={''} onClose={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
