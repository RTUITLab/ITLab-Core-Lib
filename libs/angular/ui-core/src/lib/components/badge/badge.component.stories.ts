import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import {CommonModule} from "@angular/common";

export default {
  title: 'BadgeComponent',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent],
      imports: [CommonModule]
    })
  ],
  parameters: {
    layout: 'fullscreen',
  },
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
  props: args,
  template: `
  <div
    style="
     display:grid;
     grid-template-columns: repeat(5, 1fr);
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
        (type === 'outline' && color === 'transparent') ||
        (color !== 'transparent'); else showEmpty"
        >
        <div
          *ngIf="idx === 0;else showSimple">
            {{color}}
            <ng-ui-core-badge
            [value]="value"
            [type]="type"
            [color]="color"
            [size]="size"
          ></ng-ui-core-badge>
        </div>
        <ng-template #showSimple>
          <ng-ui-core-badge
            [value]="value"
            [type]="type"
            [color]="color"
            [size]="size"
          ></ng-ui-core-badge>
        </ng-template>
      </ng-container>
      <ng-template #showEmpty><div></div></ng-template>
    </ng-container>
  </ng-container>
  </div>
  `
});
export const LargeAllStatesStory = AllStatesStoryTemplate.bind({});
LargeAllStatesStory.args = {
  value: '1',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  types: ['outline',
    'solid',
    'light'
  ],
  colors: ['primary',
    'red',
    'green',
    'transparent'
  ],
  size: 'large'
};
LargeAllStatesStory.storyName = "LargeAllStatesStory badge";

export const MediumAllStatesStory = AllStatesStoryTemplate.bind({});
MediumAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  size: 'medium'
};
MediumAllStatesStory.storyName = "MediumAllStatesStory badge";

export const SmallAllStatesStory = AllStatesStoryTemplate.bind({});
SmallAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  size: 'small'
};
SmallAllStatesStory.storyName = "SmallAllStatesStory badge";
