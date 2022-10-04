import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './tag';

export default {
  component: Tag,
  title: 'Tag',
  argTypes: {
    className: { control: 'text' },
    type: { control: 'radio', options: ['solid', 'outline', 'light'], table: {defaultValue: {summary: 'outline'}}, },
    color: {
      control: 'select',
      options: ['primary', 'red', 'green', 'orange', 'transparent'],
      table: {defaultValue: {summary: 'primary'}},
    },
    shape: { control: 'radio', options: ['rectangular', 'circle'], table: {defaultValue: {summary: 'rectangular'}}, },
  }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag style={{margin: 50}} {...args}>
    Кукусики
  </Tag>
);

const LargeTextTemplate: ComponentStory<typeof Tag> = (args) => (
  <Tag style={{margin: 50}} {...args} onClick={() => console.log('Я удален')}>

  </Tag>
);

export const Primary = Template.bind({});
Primary.args = {

};
export const CustomCrossTooltip = Template.bind({});
CustomCrossTooltip.args = {
  tooltipCrossContent: 'Любой текст'
};
export const LargeText = LargeTextTemplate.bind({});
LargeText.args = {
  children: 'Очень длинный длинный текст'
};

export const CustomMaxLength = LargeTextTemplate.bind({});
CustomMaxLength.args = {
  maxLength: 300,
  children: 'Очень длинный длинный текст Очень длинный длинный текст'
};
