import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TextArea} from './text-area';

export default {
  component: TextArea,
  title: 'TextArea',
  argTypes: {
    onChange: { action: 'onChange executed!' },
    onBlur: { action: 'onBlur executed!' },
    onFocus: { action: 'onFocus executed!' },
    onError: { action: 'a lot of symbols detected!' },
    className: { control: 'text' },
    isRequired: {table: {defaultValue: {summary: 'false'}},},
    readonly: {table: {defaultValue: {summary: 'false'}},},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    error: {table: {defaultValue: {summary: 'false'}},},
    valid: {table: {defaultValue: {summary: 'false'}},},
    autoFocus: {table: {defaultValue: {summary: 'false'}},},
    size: {table: {defaultValue: {summary: 'medium'}},control:{type: 'radio', options:['small', 'medium', 'large']}},
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
  maxLength: 100,
  isRequired: true,
  label: 'Комментарий',
};
export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  name: '',
  id: '',
  defaultValue: '',
  placeholder: '',
  disabled: false,
  maxLength: 200,
};
