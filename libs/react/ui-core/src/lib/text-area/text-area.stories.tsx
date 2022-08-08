import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TextArea} from './text-area';

export default {
  component: TextArea,
  title: 'TextArea',
  argTypes: {
    onChange: { action: 'onChange executed!' },
    onBlur: { action: 'onBlur executed!' },
    onFocus: { action: 'onFocus executed!' },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  id: '',
  defaultValue: '',
  placeholder: '',
  disabled: false,
};
