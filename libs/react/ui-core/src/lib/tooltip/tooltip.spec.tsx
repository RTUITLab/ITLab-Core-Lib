import {render} from '@testing-library/react';

import {Tooltip} from './tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tooltip tooltipContent={"fd"} children={<div>fds</div>}/>);
    expect(baseElement).toBeTruthy();
  });
});
