import { render } from '@testing-library/react';

import {Tabs} from './tabs';

describe('Tabs', () => {
  it('should render successfully', () => {
    const items = [{label: 'События', key: 'key3'},{label: 'Проекты', key: 'key4'}]
    const { baseElement } = render(<Tabs items={items} />);
    expect(baseElement).toBeTruthy();
  });
});
