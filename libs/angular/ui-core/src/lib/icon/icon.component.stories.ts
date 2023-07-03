import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: {
    color:{
      options:['primary','general','green','red','yellow','orange','general-light','green-light','red-light','yellow-light','orange-light','general-dark','green-dark','red-dark','yellow-dark','orange-dark'],
      control: { type: 'select' }
    },
    type:{
      options:['fill','line', ' '],
      control: { type: 'radio' }
    }
  }
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
  template: `
  <ng-ui-core-icon
    [name]="name"
    [type]="type"
    [color]="color"
    [size]="size"
  >
  </ng-ui-core-icon>
  `
});


export const Primary = Template.bind({});
Primary.args = {
  name:"code-s-slash",
  color:"primary",
  type:"fill",
  size:24,
}