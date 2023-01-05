import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { BadgeComponent } from "../badge";
import { InitialBadgeStory } from "../badge/badge.component.stories";

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  subcomponents: {BadgeComponent},
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, BadgeComponent],
    })
  ],
  argTypes: {
    clickCb: {control: false},
    focusCb: {control: false},
    blurCb: {control: false},
    containerClass: {table: {disable: true}},
  }
} as Meta<ButtonComponent>;

const InitialButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
});

export const InitialButtonStory = InitialButtonTemplate.bind({});
InitialButtonStory.args = {
  label: 'Press',
};
InitialButtonStory.storyName = "InitialButtonStory button"

const ButtonWithBadgeTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    children: {
      ...InitialBadgeStory.args,
      type: 'outline',
      size: 'large',
      color: 'primary'
    },
  },
  template: `
  <nuc-button
    [type]="type"
    [label]="label"
    [styleColor]="styleColor"
    [styleType]="styleType"
    [buttonSize]="buttonSize"
    [icon]="icon"
    [iconPos]="iconPos"
    [disabled]="disabled"
    [loading]="loading"
    [loadingIconStyle]="loadingIconStyle"
    [style]="style"
    [styleClass]="styleClass"
    [ariaLabel]="ariaLabel"
  >
    <nuc-badge
    [styleClass]="children.styleClass"
    [style]="children.style"
    [value]="children.value"
    [size]="children.size"
    [color]="children.color"
    [type]="children.type"
    ></nuc-badge>
  </nuc-button>
  `
});
export const ButtonWithBadgeStory = ButtonWithBadgeTemplate.bind({});
ButtonWithBadgeStory.args = {
  label: 'Press',
  styleType: 'solid',
  styleColor: 'primary'
};
ButtonWithBadgeStory.storyName = "ButtonWithBadgeStory button"


const AllStatesStoryTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    types: [
      'solid',
      'outline',
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

          <nuc-button
            [type]="type"
            [label]="label"
            [styleColor]="color"
            [styleType]="type"
            [buttonSize]="buttonSize"
            [icon]="icon"
            [iconPos]="iconPos"
            [disabled]="disabled"
            [loading]="loading"
            [loadingIconStyle]="loadingIconStyle"
            [style]="style"
            [styleClass]="styleClass"
            [ariaLabel]="ariaLabel"
          ></nuc-button>
        </div>
      </ng-container>
      <ng-template #showEmpty><div></div></ng-template>
    </ng-container>
  </ng-container>
  </div>
  `
});
AllStatesStoryTemplate.argTypes = {
  styleColor: {control: false},
  styleType: {control: false}
};

export const LargeAllStatesStory = AllStatesStoryTemplate.bind({});
LargeAllStatesStory.args = {
  label: 'Press',
  buttonSize: 'large'
};
LargeAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
}
LargeAllStatesStory.storyName = "LargeAllStatesStory button";

export const MediumAllStatesStory = AllStatesStoryTemplate.bind({});
MediumAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  buttonSize: 'medium'
};
MediumAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
MediumAllStatesStory.storyName = "MediumAllStatesStory button";

export const SmallAllStatesStory = AllStatesStoryTemplate.bind({});
SmallAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  buttonSize: 'small'
};
SmallAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
SmallAllStatesStory.storyName = "SmallAllStatesStory button";

export const DisabledMediumAllStatesStory = AllStatesStoryTemplate.bind({});
DisabledMediumAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  buttonSize: 'medium',
  disabled: true
};
DisabledMediumAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
DisabledMediumAllStatesStory.storyName = "DisabledMediumAllStatesStory button";

export const TextIconButtonLargeAllStatesStory = AllStatesStoryTemplate.bind({});
TextIconButtonLargeAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  icon: 'ri-check-line'
};
TextIconButtonLargeAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
TextIconButtonLargeAllStatesStory.storyName = "TextIconButtonLargeAllStatesStory button";

export const TextIconButtonMediumAllStatesStory = AllStatesStoryTemplate.bind({});
TextIconButtonMediumAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  buttonSize: 'medium',
  icon: 'ri-check-line'
};
TextIconButtonMediumAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
TextIconButtonMediumAllStatesStory.storyName = "TextIconButtonMediumAllStatesStory button";

export const TextIconButtonSmallAllStatesStory = AllStatesStoryTemplate.bind({});
TextIconButtonSmallAllStatesStory.args = {
  ...LargeAllStatesStory.args,
  buttonSize: 'small',
  icon: 'ri-check-line'
};
TextIconButtonSmallAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
TextIconButtonSmallAllStatesStory.storyName = "TextIconButtonSmallAllStatesStory button";

export const IconButtonLargeAllStatesStory = AllStatesStoryTemplate.bind({});
IconButtonLargeAllStatesStory.args = {
  buttonSize: 'large',
  icon: 'ri-check-line'
};
IconButtonLargeAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
IconButtonLargeAllStatesStory.storyName = "IconButtonLargeAllStatesStory button";

export const IconButtonMediumAllStatesStory = AllStatesStoryTemplate.bind({});
IconButtonMediumAllStatesStory.args = {
  buttonSize: 'medium',
  icon: 'ri-check-line'
};
IconButtonMediumAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
IconButtonMediumAllStatesStory.storyName = "IconButtonMediumAllStatesStory button";

export const IconButtonSmallAllStatesStory = AllStatesStoryTemplate.bind({});
IconButtonSmallAllStatesStory.args = {
  buttonSize: 'small',
  icon: 'ri-check-line'
};
IconButtonSmallAllStatesStory.argTypes = {
  ...AllStatesStoryTemplate.argTypes
};
IconButtonSmallAllStatesStory.storyName = "IconButtonSmallAllStatesStory button";


