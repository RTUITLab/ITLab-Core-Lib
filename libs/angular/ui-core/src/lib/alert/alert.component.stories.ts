import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { IconComponentModule } from '../icon/icon.component';

export default {
  title: 'Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponentModule],
    })
  ],
  argTypes: {
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'radio' },
      children: {type: 'html'}
    }
  }
} as Meta<AlertComponent>;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
  template:`
    <ng-ui-core-alert [style]="style" [title]="title" [subtitle]="subtitle" [type]="type" [closable]="closable">
      {{children}}
    </ng-ui-core-alert>
    <ng-ui-core-alert [style]="style" [title]="title" [subtitle]="subtitle" [type]="type" [closable]="closable">
      {{children}}
    </ng-ui-core-alert>
  `
});


export const Primary = Template.bind({});
Primary.args = {
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  children: `Внутренний контент (управляется пользователем)`,
  closable: true,
  type: 'info',
  style: {},
}