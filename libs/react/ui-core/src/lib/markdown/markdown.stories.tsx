import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Markdown } from './markdown';

export default {
  component: Markdown,
  title: 'Markdown',
  argTypes: {
    onAttachFile: { action: 'File attached!' },
    initialSection: { defaultValue: 'Writing' },
    split: { defaultValue: true },
    value: { control: false },
  }
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => {
   return(
    <Markdown {...args}  />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  height: 400
};
