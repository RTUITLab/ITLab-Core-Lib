import { render } from '@testing-library/react';

import {Calendar} from './calendar';

describe('Calendar', () => {
  it('should render successfully', () => {
    const func = () => {}
    const funcDate = () => new Date ()
    const { baseElement } = render(<Calendar onSelectDate={func} currentMonth={new Date()} selectedDate={new Date()} setCurrentMonth={funcDate} />);
    expect(baseElement).toBeTruthy();
  });
});
