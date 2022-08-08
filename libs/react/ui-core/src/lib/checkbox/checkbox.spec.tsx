import {getByRole, render} from '@testing-library/react'

import {Checkbox} from './checkbox'

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with props', () => {
    const { baseElement } = render(<Checkbox checked={true} name={'myName'} label={'Click me'} />);
    expect(getByRole(baseElement, 'checkbox')).toHaveProperty('checked', true)
    expect(getByRole(baseElement, 'checkbox')).toHaveProperty('name', 'myName')
  });
});
