import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

export default {
  title: 'BadgeComponent',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent]
    })
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    containerClass: {table: {disable: true}}
  }
} as Meta<BadgeComponent>;


const InitialTemplate: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: args
});

export const InitialBadgeStory = InitialTemplate.bind({});
InitialBadgeStory.args = {
  value: '1'
};
InitialBadgeStory.storyName = "Initial badge";

export const NumberValueMoreThenMaxBadgeStory = InitialTemplate.bind({});
NumberValueMoreThenMaxBadgeStory.args = {
  value: '100'
};
NumberValueMoreThenMaxBadgeStory.storyName = "NumberValueMoreThenMaxBadgeStory badge";

const AllStatesStoryTemplate: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: {
    types: ['outline',
      'solid',
      'light',
      'transparent'
    ],
    colors: ['primary',
      'red',
      'green'
    ],
    ...args,
  },
  template: `
  <div
    style="
     display:grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 1rem;
     align-items: center;
     "
    >
  <ng-container
    *ngFor="let type of types; let idx = index"
    >
      {{type}}
    <ng-container
      *ngFor="let color of colors"
      >
      <ng-container
        *ngIf="
        (type === 'transparent' && color === 'primary') ||
        (type !== 'transparent'); else showEmpty"
        >
        <div>
          <ng-container *ngIf="idx === 0">{{color}}</ng-container>

          <nuc-badge
            [value]="value"
            [type]="type"
            [color]="color"
            [size]="size"
            [style]="style"
            [styleClass]="styleClass"
          ></nuc-badge>
        </div>
      </ng-container>
      <ng-template #showEmpty><div></div></ng-template>
    </ng-container>
  </ng-container>
  </div>
  `
});
AllStatesStoryTemplate.argTypes = {
  color: {control: false},
  type: {control: false}
};

export const LargeAllStatesStory = AllStatesStoryTemplate.bind({});
LargeAllStatesStory.args = {
  value: '1',
  size: 'large'
};
LargeAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
}
LargeAllStatesStory.storyName = "LargeAllStatesStory badge";

export const MediumAllStatesStory = AllStatesStoryTemplate.bind({});
MediumAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  size: 'medium'
};
MediumAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
MediumAllStatesStory.storyName = "MediumAllStatesStory badge";

export const SmallAllStatesStory = AllStatesStoryTemplate.bind({});
SmallAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  size: 'small'
};
SmallAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
SmallAllStatesStory.storyName = "SmallAllStatesStory badge";
