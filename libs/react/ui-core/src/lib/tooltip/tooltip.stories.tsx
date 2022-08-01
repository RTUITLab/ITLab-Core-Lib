import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tooltip} from './tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{padding:"50px 70px"}}>
    <Tooltip {...args}><div>
      Hover me
    </div></Tooltip>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  tooltipContent: <div>Hello!</div>,
  position: 'bottom',
};
