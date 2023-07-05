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
    title: {
      control: { type: 'text'},
      
    },
    subtitle: {
      control: { type: 'text' }
    },
    style: {
      control: { type: 'object' }
    },
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'radio' }
    },
    closable: {
      control: { type: 'boolean' }
    },
    
  }
} as Meta<AlertComponent>;

const TemplatePrimary: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
  template:`
    <ng-ui-core-alert [style]="style" [title]="title" [subtitle]="subtitle" [type]="type" [closable]="closable">
    </ng-ui-core-alert>
  `
});


export const Primary = TemplatePrimary.bind({});
Primary.args = {
  title: 'Заголовок',
  // subtitle: '',
  // closable: true,
  // type: 'info',
  // style: {},
}

const TemplateContent: Story = (args) => ({
  props: args,
  template:`
    <ng-ui-core-alert [style]="style" [title]="title" [subtitle]="subtitle" [type]="type" [closable]="closable">
      <h1 class="alert-header">Любой внутренний контент, который <u>необходимо отобразить</u></h1>
    </ng-ui-core-alert>
  `
});

export const WithContent = TemplateContent.bind({});
WithContent.args = {
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  // closable: true,
  // type: 'info',
  // style: {},
}
