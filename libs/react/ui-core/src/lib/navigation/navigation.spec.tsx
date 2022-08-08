import {render} from '@testing-library/react';

import {Navigation} from './navigation';
import {NavigationProps} from "./NavigationProps";

describe('Navigation', () => {
  it('should render successfully', () => {

    const items: NavigationProps = {
      items: [
        {
          label: 'Home',
          icon: 'ri-home-line',
          disabled: false
        }
      ]
    }

    const {baseElement} = render(<Navigation items={items.items}/>);
    expect(baseElement).toBeTruthy();
  });
});
