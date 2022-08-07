import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tooltip} from './tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
} as ComponentMeta<typeof Tooltip>;

const DefaultTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{padding:"50px 70px"}}>
    <Tooltip {...args}><div>
      Hover me
    </div></Tooltip>
  </div>
);

const InteractiveTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{padding:"50px 70px", marginBottom:"120px"}}>
    <Tooltip {...args}><div>
      Hover me
    </div></Tooltip>
  </div>
);


export const Default = DefaultTemplate.bind({});
Default.args = {
  tooltipContent: <div>Hello!</div>,
  position: 'bottom',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  type: 'interactive',
  position: 'bottom-right',
};

export const Meta = DefaultTemplate.bind({});
Meta.args = {
  type: 'meta',
  position: 'bottom',
  metaTitle:"Title",
  metaDescription:"Description",
};
