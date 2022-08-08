import {getByRole, render} from '@testing-library/react'

import Input from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
    expect(getByRole(baseElement, 'textbox')).toHaveProperty('value', '')
  });

  it('should have current value', () => {
    const { baseElement } = render(<Input name={'myName'} defaultValue={'default value 3'} />);
    expect(getByRole(baseElement, 'textbox')).toHaveProperty('name', 'myName')
    expect(getByRole(baseElement, 'textbox')).toHaveProperty('value', 'default value 3')
  });
});
