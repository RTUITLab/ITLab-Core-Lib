import {render} from '@testing-library/react';
import {Button} from "@itlab-core-lib/react/ui-core";


describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
