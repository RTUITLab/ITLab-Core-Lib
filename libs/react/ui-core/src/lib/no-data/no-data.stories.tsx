import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoData } from './no-data';

export default {
  component: NoData,
  title: 'NoData',
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: {maxWidth: 100}
};

export const Logo = Template.bind({});
Logo.args = {
  displayLogo: true,
  style: {maxWidth: 200, margin: 'auto'}
};
